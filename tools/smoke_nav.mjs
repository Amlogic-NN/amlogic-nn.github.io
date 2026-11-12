/**
 * Regression smoke test: click through every nav section/language and report
 * JS errors plus what is actually visible.
 *
 * Usage: node tools/smoke_nav.mjs <dir> [port]
 */

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { spawn } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';

const dir = process.argv[2];
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = Number(process.argv[3] || 8700 + Math.floor(Math.random() * 200));
const MIME = { '.html': 'text/html; charset=utf-8', '.webp': 'image/webp', '.js': 'text/javascript' };

const server = createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(req.url.split('?')[0])).replace(/^([/\\])+/, '');
  try {
    const file = join(dir, path || 'index.html');
    if (!(await stat(file)).isFile()) throw new Error('dir');
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': MIME[extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404).end('nf');
  }
});
await new Promise((r) => server.listen(PORT, '127.0.0.1', r));

const profileDir = mkdtempSync(join(tmpdir(), 'smoke-chrome-'));
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
const pending = new Map();
const errors = [];
let sessionId = null;
ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg.result ?? msg.error);
    pending.delete(msg.id);
    return;
  }
  if (msg.method === 'Runtime.exceptionThrown') {
    errors.push(msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text);
  }
  if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type === 'error') {
    errors.push(msg.params.args.map((a) => a.value ?? a.description).join(' '));
  }
  // Parse errors (a truncated document, a broken inline script) only show up here.
  if (msg.method === 'Log.entryAdded' && msg.params.entry.level === 'error') {
    errors.push(`[log] ${msg.params.entry.text} ${msg.params.entry.url || ''}`);
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
const attached = await send('Target.attachToTarget', { targetId, flatten: true });
sessionId = attached.sessionId;
if (!sessionId) {
  console.error('attach failed:', JSON.stringify(attached));
  process.exit(1);
}
await send('Page.enable');
await send('Runtime.enable');
await send('Log.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 3, mobile: true });
await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/index.html` });
await sleep(2500);

const SECTIONS = ['home', 'performance', 'agents', 'skills', 'demos', 'sdk', 'models', 'start', 'quick', 'troubleshoot'];
const rows = [];
for (const id of SECTIONS) {
  const res = await send('Runtime.evaluate', {
    returnByValue: true,
    expression: `(() => {
      const btn = document.querySelector('[data-section="${id}"]');
      if (!btn) return { id: '${id}', error: 'nav button missing' };
      btn.click();
      const shown = (sel) => { const el = document.querySelector(sel); return el ? (!el.hidden && el.getBoundingClientRect().height > 0) : null; };
      return {
        id: '${id}',
        title: document.getElementById('title').textContent,
        overview: shown('#overview'),
        grid: shown('#grid'),
        cards: document.querySelectorAll('#grid .card').length,
        learning: shown('#learning'),
        perf: shown('#performance'),
        footer: shown('main > footer'),
        height: Math.round(document.body.scrollHeight),
      };
    })()`,
  });
  rows.push(res.result ? res.result.value : { id, evaluate_error: res.message || JSON.stringify(res) });
}

// Language toggle must not throw and must re-render the current section.
await send('Runtime.evaluate', {
  returnByValue: true,
  expression: `document.getElementById('language-toggle').click()`,
});
await sleep(300);
const lang = await send('Runtime.evaluate', {
  returnByValue: true,
  expression: `({ toggle: document.getElementById('language-toggle').textContent, title: document.getElementById('title').textContent, cards: document.querySelectorAll('#grid .card, #overview .home-tile').length })`,
});

// The baked home markup must equal what the renderer produces, byte for byte,
// otherwise the pre-render has drifted from the templates.
await send('Runtime.evaluate', { expression: `document.getElementById('language-toggle').click()` });
await sleep(300);
const drift = await send('Runtime.evaluate', {
  returnByValue: true,
  expression: `(() => {
    const host = document.getElementById('overview');
    // canvas width/height are runtime state written by the animation, not markup.
    host.querySelectorAll('canvas').forEach((c) => { c.removeAttribute('width'); c.removeAttribute('height'); });
    const baked = host.innerHTML;
    host.removeAttribute('data-prerender');
    search.value = '';
    renderOverview();
    const fresh = host.innerHTML;
    host.dataset.prerender = 'home';
    let at = -1;
    for (let i = 0; i < Math.max(baked.length, fresh.length); i++) {
      if (baked[i] !== fresh[i]) { at = i; break; }
    }
    return {
      match: baked === fresh,
      baked: baked.length,
      fresh: fresh.length,
      first_diff: at,
      context: at < 0 ? null : baked.slice(Math.max(0, at - 60), at + 60),
    };
  })()`,
});

for (const row of rows) console.log(JSON.stringify(row));
console.log(JSON.stringify({ language_switch: lang.result.value, errors }));
console.log(JSON.stringify({ prerender: drift.result.value }));

// Home search must still filter the pre-rendered directory (and restores it).
const searchCheck = await send('Runtime.evaluate', {
  returnByValue: true,
  awaitPromise: true,
  expression: `(async () => {
    document.querySelector('[data-section="home"]').click();
    await new Promise((r) => setTimeout(r, 200));
    const count = () => document.querySelectorAll('#overview .home-tile').length;
    const before = count();
    search.value = 'perf';
    search.dispatchEvent(new Event('input'));
    await new Promise((r) => setTimeout(r, 200));
    const filtered = count();
    search.value = '';
    search.dispatchEvent(new Event('input'));
    await new Promise((r) => setTimeout(r, 200));
    return { before, filtered, restored: count() };
  })()`,
});
console.log(JSON.stringify({ home_search: searchCheck.result.value }));

// A stored Chinese preference must bypass the English pre-render.
await send('Runtime.evaluate', { expression: `localStorage.setItem('amlogic-language','zh')` });
await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/index.html` });
await sleep(2200);
const zh = await send('Runtime.evaluate', {
  returnByValue: true,
  expression: `({ title: document.getElementById('title').textContent, hero: (document.querySelector('.home-hero h2') || {}).textContent || null, tiles: document.querySelectorAll('#overview .home-tile').length })`,
});
await send('Runtime.evaluate', { expression: `localStorage.removeItem('amlogic-language')` });
console.log(JSON.stringify({ zh_first_visit: zh.result.value }));

// The benchmark dataset is fetched on demand: the section must still render.
const perfCheck = await send('Runtime.evaluate', {
  returnByValue: true,
  awaitPromise: true,
  expression: `(async () => {
    document.querySelector('[data-section="performance"]').click();
    await new Promise((r) => setTimeout(r, 1500));
    const host = document.getElementById('performance');
    return {
      panels: host.querySelectorAll('.perf-panel').length,
      statCards: host.querySelectorAll('.perf-stats > div').length,
      tabs: host.querySelectorAll('[data-set]').length,
      exportButton: !!host.querySelector('#csv'),
      dataLoaded: typeof PERF_DATA !== 'undefined' && !!PERF_DATA,
    };
  })()`,
});
console.log(JSON.stringify({ performance_data: perfCheck.result.value }));

// The service worker must register so repeat visits can be served from cache.
const sw = await send('Runtime.evaluate', {
  returnByValue: true,
  awaitPromise: true,
  expression: `(async () => {
    if (!('serviceWorker' in navigator)) return { supported: false };
    const regs = await navigator.serviceWorker.getRegistrations();
    return { supported: true, registered: regs.length, controlled: !!navigator.serviceWorker.controller };
  })()`,
});
console.log(JSON.stringify({ service_worker: sw.result.value }));

// The script URL must carry the hash of the file it points at, otherwise a cached
// app.js can be paired with fresh HTML and throw on removed elements.
const stamp = await (async () => {
  const { createHash } = await import('node:crypto');
  const html = await (await fetch(`http://127.0.0.1:${PORT}/index.html`)).text();
  const js = Buffer.from(await (await fetch(`http://127.0.0.1:${PORT}/assets/app.js`)).arrayBuffer());
  const expected = createHash('sha1').update(js).digest('hex').slice(0, 8);
  const found = (html.match(/assets\/app\.js\?v=([0-9a-f]+)/) || [])[1] || null;
  return { expected, found, match: found === expected };
})();
console.log(JSON.stringify({ asset_stamp: stamp }));

ws.close();
chrome.kill();
server.close();
await sleep(300);
try { rmSync(profileDir, { recursive: true, force: true }); } catch {}
process.exit(0);
