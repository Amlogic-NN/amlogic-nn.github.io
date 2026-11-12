/**
 * Screenshot the portal at a phone and a desktop size, home + one content view.
 * Usage: node tools/screenshot.mjs <dir> <outDir> [port]
 */

import { createServer } from 'node:http';
import { readFile, stat, mkdir, writeFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { spawn } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';

const dir = process.argv[2];
const outDir = process.argv[3] || join(dir, '.screenshots');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = Number(process.argv[4] || 9300 + Math.floor(Math.random() * 300));
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

const profileDir = mkdtempSync(join(tmpdir(), 'shot-chrome-'));
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
await mkdir(outDir, { recursive: true });

// `--zh` renders the Chinese UI (the language is persisted in localStorage).
const zh = process.argv.includes('--zh');
if (zh) {
  await send('Page.addScriptToEvaluateOnNewDocument', {
    source: "localStorage.setItem('amlogic-language','zh')",
  });
}
const suffix = zh ? '-zh' : '';

const shots = [
  { name: `mobile-home${suffix}`, width: 390, height: 844, dpr: 3, mobile: true, section: 'home' },
  { name: `mobile-quick${suffix}`, width: 390, height: 844, dpr: 3, mobile: true, section: 'quick' },
  { name: `desktop-home${suffix}`, width: 1440, height: 900, dpr: 1, mobile: false, section: 'home' },
];

for (const shot of shots) {
  await send('Emulation.setDeviceMetricsOverride', {
    width: shot.width,
    height: shot.height,
    deviceScaleFactor: shot.dpr,
    mobile: shot.mobile,
  });
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/index.html` });
  await sleep(1800);
  if (shot.section !== 'home') {
    await send('Runtime.evaluate', { expression: `document.querySelector('[data-section="${shot.section}"]').click()` });
    await sleep(700);
  }
  const { data } = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  const file = join(outDir, `${shot.name}.png`);
  await writeFile(file, Buffer.from(data, 'base64'));
  console.log(`wrote ${file}`);
}

ws.close();
chrome.kill();
server.close();
await sleep(300);
try { rmSync(profileDir, { recursive: true, force: true }); } catch {}
process.exit(0);
