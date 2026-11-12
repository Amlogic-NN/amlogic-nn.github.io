/**
 * CSS equivalence fingerprint: hash the *computed* style of representative
 * elements in several sections. If two builds produce identical output, the
 * stylesheet merge did not change the cascade.
 *
 * Usage: node tools/style_fingerprint.mjs <dir> [port]
 */

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { spawn } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';

const dir = process.argv[2];
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = Number(process.argv[3] || 9100 + Math.floor(Math.random() * 200));
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

const profileDir = mkdtempSync(join(tmpdir(), 'fp-chrome-'));
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
await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/index.html` });
await sleep(2500);

const SECTIONS = ['home', 'performance', 'skills', 'demos', 'start', 'quick'];

// Freeze motion: getComputedStyle reports *animated* values for opacity and
// transform, so a running animation makes two equivalent builds look different.
await send('Runtime.evaluate', {
  expression: `(() => {
    const s = document.createElement('style');
    s.textContent = '*,*::before,*::after{animation:none!important;transition:none!important}';
    document.head.appendChild(s);
  })()`,
});
await sleep(200);
const SELECTORS = [
  'body', 'aside', '.brand', '.nav button', '.nav button.active', 'main', 'h1', '.subtitle',
  '.eyebrow', '.banner', '.toolbar', '.filters button', '.filters button.active', '#grid',
  '.card', '.card h3', '.card .icon', '.card .status', '.card .tag', '.card .link',
  '.home-hero', '.home-hero h2', '.hero-button', '.hero-stack', '.home-facts', '.home-facts div',
  '.home-tile', '.home-tile strong', 'footer', '.community-option', '.search',
  '.perf-panel', '.perf-tabs button', '.perf-stats div', '.perf-note', 'table', 'thead th', 'tbody td',
  '.qs-chapter', '.qs-chapter-head h3', '.command-box pre', '.copy-command', '.flow-block',
  '.arch-box', '.arch-group', '.intros', '.guide-figure', 'pre', 'code', '.link', '.primary',
];

const fingerprint = `(() => {
  const hash = (text) => {
    let h = 5381;
    for (let i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  };
  const out = {};
  for (const selector of ${JSON.stringify(SELECTORS)}) {
    const el = document.querySelector(selector);
    if (!el) { out[selector] = 'absent'; continue; }
    const cs = getComputedStyle(el);
    const text = Object.keys(cs).sort().map((k) => k + ':' + cs.getPropertyValue(k)).join(';');
    out[selector] = text.includes('none') ? hash(text) : hash(text);
  }
  return out;
})()`;

const result = {};
for (const id of SECTIONS) {
  await send('Runtime.evaluate', { expression: `document.querySelector('[data-section="${id}"]').click()` });
  await sleep(200);
  const res = await send('Runtime.evaluate', { returnByValue: true, expression: fingerprint });
  result[id] = res.result.value;
}

const sheets = await send('Runtime.evaluate', {
  returnByValue: true,
  expression: `({ styleSheets: document.styleSheets.length, rules: [...document.styleSheets].reduce((a, s) => a + s.cssRules.length, 0) })`,
});

console.log(JSON.stringify({ sheets: sheets.result.value, sections: result }, null, 1));
ws.close();
chrome.kill();
server.close();
await sleep(300);
try { rmSync(profileDir, { recursive: true, force: true }); } catch {}
process.exit(0);
