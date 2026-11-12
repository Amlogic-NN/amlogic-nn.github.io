/**
 * Pre-render the home view into index.html.
 *
 * Renders the home section in a real browser, captures the resulting markup and
 * writes it into <section id="overview"> with data-prerender="home". At runtime
 * adoptHome() then skips the rebuild. Re-run this after changing home templates,
 * hero copy or RESOURCES counts; tools/smoke_nav.mjs fails if the baked markup
 * ever drifts from what the renderer produces.
 *
 * Usage: node tools/prerender_home.mjs [dir] [port]
 */

import { createServer } from 'node:http';
import { readFile, writeFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { spawn } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';

const dir = process.argv[2] || process.cwd();
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = Number(process.argv[3] || 9200 + Math.floor(Math.random() * 200));
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

const profileDir = mkdtempSync(join(tmpdir(), 'prerender-chrome-'));
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
const failures = [];
ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg.result ?? msg.error);
    pending.delete(msg.id);
    return;
  }
  if (msg.method === 'Runtime.exceptionThrown') {
    failures.push(msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text);
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

// Render from scratch (ignore any markup that is already baked in) and capture it.
const rendered = await send('Runtime.evaluate', {
  returnByValue: true,
  expression: `(() => {
    const host = document.getElementById('overview');
    host.removeAttribute('data-prerender');
    search.value = '';
    renderOverview();
    return host.innerHTML;
  })()`,
});
const markup = rendered.result.value;
if (!markup || markup.length < 500) {
  console.error(`refusing to write: captured ${markup ? markup.length : 0} chars`);
  process.exit(1);
}
if (failures.length) {
  console.error('JS errors during render:\n' + failures.join('\n'));
  process.exit(1);
}

const htmlPath = join(dir, 'index.html');
const html = await readFile(htmlPath, 'utf8');
const start = html.indexOf('<section id="overview"');
const next = html.indexOf('<section id="performance"', start);
if (start < 0 || next < 0) {
  console.error('cannot locate the overview section');
  process.exit(1);
}
const openTag = '<section id="overview" data-prerender="home" aria-label="Developer portal overview">';
const replacement = `${openTag}${markup}</section>\n`;
const updated = html.slice(0, start) + replacement + html.slice(next);

await writeFile(htmlPath, updated, 'utf8');
console.log(`prerendered home: ${markup.length.toLocaleString()} chars of markup`);
console.log(`index.html: ${html.length.toLocaleString()} -> ${updated.length.toLocaleString()} bytes`);

ws.close();
chrome.kill();
server.close();
await sleep(300);
try { rmSync(profileDir, { recursive: true, force: true }); } catch {}
process.exit(0);
