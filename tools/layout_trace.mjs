/**
 * Trace layout of the top-level shell while the page loads, to explain CLS.
 * Usage: node tools/layout_trace.mjs <dir> [port]
 */

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { spawn } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';

const dir = process.argv[2];
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = Number(process.argv[3] || 10200 + Math.floor(Math.random() * 200));
const MIME = { '.html': 'text/html; charset=utf-8', '.webp': 'image/webp' };

const server = createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(req.url.split('?')[0])).replace(/^([/\\])+/, '');
  try {
    const file = join(dir, path || 'index.html');
    if (!(await stat(file)).isFile()) throw new Error('x');
    res.writeHead(200, { 'content-type': MIME[extname(file)] || 'application/octet-stream' });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404).end('nf');
  }
});
await new Promise((r) => server.listen(PORT, '127.0.0.1', r));

const profileDir = mkdtempSync(join(tmpdir(), 'trace-chrome-'));
const chrome = spawn(CHROME, [
  '--headless=new',
  `--remote-debugging-port=${PORT + 1}`,
  `--user-data-dir=${profileDir}`,
  '--no-first-run',
  '--hide-scrollbars',
  'about:blank',
], { stdio: 'ignore' });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function endpoint() {
  for (let i = 0; i < 100; i++) {
    try {
      const info = await (await fetch(`http://127.0.0.1:${PORT + 1}/json/version`)).json();
      if (info.webSocketDebuggerUrl) return info.webSocketDebuggerUrl;
    } catch {}
    await sleep(150);
  }
  throw new Error('chrome did not start');
}

const ws = new WebSocket(await endpoint());
await new Promise((r) => (ws.onopen = r));
let nextId = 0;
let sessionId = null;
const pending = new Map();
ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg.result ?? msg.error);
    pending.delete(msg.id);
  }
};
const send = (method, params = {}) =>
  new Promise((resolve) => {
    const id = ++nextId;
    pending.set(id, resolve);
    const message = { id, method, params };
    if (sessionId) message.sessionId = sessionId;
    ws.send(JSON.stringify(message));
  });

const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
sessionId = (await send('Target.attachToTarget', { targetId, flatten: true })).sessionId;
await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 3, mobile: true });
await send('Emulation.setCPUThrottlingRate', { rate: 4 });
await send('Network.setCacheDisabled', { cacheDisabled: true });
await send('Network.emulateNetworkConditions', {
  offline: false,
  latency: 150,
  downloadThroughput: (1.6 * 1024 * 1024) / 8,
  uploadThroughput: (750 * 1024) / 8,
});

await send('Page.addScriptToEvaluateOnNewDocument', {
  source: `
    window.__trace = [];
    const sample = () => {
      const aside = document.querySelector('aside');
      const main = document.querySelector('main');
      const ov = document.getElementById('overview');
      const nav = document.getElementById('nav');
      window.__trace.push({
        t: Math.round(performance.now()),
        vw: window.innerWidth,
        vh: window.innerHeight,
        asideH: aside ? Math.round(aside.getBoundingClientRect().height) : -1,
        mainY: main ? Math.round(main.getBoundingClientRect().top + window.scrollY) : -1,
        ovH: ov ? Math.round(ov.getBoundingClientRect().height) : -1,
        ovHidden: ov ? ov.hidden : null,
        navButtons: nav ? nav.children.length : -1,
        navH: nav ? Math.round(nav.getBoundingClientRect().height) : -1,
        navDisplay: nav ? getComputedStyle(nav).display : '',
        brandH: (() => { const b = document.querySelector('aside .brand'); return b ? Math.round(b.getBoundingClientRect().height) : -1; })(),
        footH: (() => { const f = document.querySelector('.aside-foot'); return f ? Math.round(f.getBoundingClientRect().height) : -1; })(),
        asidePadTop: aside ? getComputedStyle(aside).paddingTop : '',
        heroH: (() => { const h = document.querySelector('.home-hero'); return h ? Math.round(h.getBoundingClientRect().height) : -1; })(),
        prerender: ov ? (ov.dataset.prerender || '') : '',
        readyState: document.readyState,
      });
    };
    const timer = setInterval(sample, 40);
    addEventListener('load', () => { sample(); setTimeout(() => { clearInterval(timer); sample(); }, 2500); });
  `,
});

await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/index.html` });
await sleep(6000);

const trace = await send('Runtime.evaluate', { returnByValue: true, expression: 'window.__trace' });
const rows = trace.result.value;
let previous = null;
for (const row of rows) {
  const key = ['vw','vh','asideH', 'mainY', 'ovH', 'ovHidden', 'navButtons', 'navH', 'navDisplay', 'brandH', 'footH', 'asidePadTop', 'heroH', 'prerender', 'readyState'].map((k) => row[k]).join('|');
  if (key !== previous) {
    console.log(JSON.stringify(row));
    previous = key;
  }
}

ws.close();
chrome.kill();
server.close();
await sleep(300);
try { rmSync(profileDir, { recursive: true, force: true }); } catch {}
process.exit(0);



