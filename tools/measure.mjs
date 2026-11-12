/**
 * Measure a page the way a mid-range phone experiences it.
 *
 * Serves a directory over HTTP, drives headless Chrome over CDP with 4x CPU
 * throttling plus a slow-4G network profile, and reports paint timings, long
 * tasks, main-thread cost and scroll frame rate.
 *
 * Usage: node tools/measure.mjs <dir> <label> [port]
 */

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { spawn } from 'node:child_process';
import { gzipSync } from 'node:zlib';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';

const [dir, label, portArg] = process.argv.slice(2);
if (!dir || !label) {
  console.error('usage: node tools/measure.mjs <dir> <label> [port]');
  process.exit(2);
}

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = Number(portArg || 8123 + Math.floor(Math.random() * 400));
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

const server = createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(req.url.split('?')[0])).replace(/^([/\\])+/, '');
  const file = join(dir, path || 'index.html');
  try {
    const info = await stat(file);
    if (!info.isFile()) throw new Error('dir');
    let body = await readFile(file);
    const headers = {
      'content-type': MIME[extname(file).toLowerCase()] || 'application/octet-stream',
    };
    // GitHub Pages serves text assets gzip-compressed; mirror that so timings are realistic.
    const wantsGzip = /\bgzip\b/.test(String(req.headers['accept-encoding'] || ''));
    if (wantsGzip && /\.(html|css|js|json|svg)$/i.test(file)) {
      body = gzipSync(body, { level: 6 });
      headers['content-encoding'] = 'gzip';
      headers.vary = 'accept-encoding';
    }
    headers['content-length'] = body.length;
    res.writeHead(200, headers);
    res.end(body);
  } catch {
    res.writeHead(404).end('not found');
  }
});
await new Promise((r) => server.listen(PORT, '127.0.0.1', r));

const profileDir = mkdtempSync(join(tmpdir(), 'measure-chrome-'));
const chrome = spawn(
  CHROME,
  [
    '--headless=new',
    `--remote-debugging-port=${PORT + 1}`,
    `--user-data-dir=${profileDir}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-extensions',
    '--disable-background-networking',
    '--hide-scrollbars',
    '--window-size=390,844',
    'about:blank',
  ],
  { stdio: 'ignore' },
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function cdpEndpoint() {
  for (let i = 0; i < 100; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT + 1}/json/version`);
      const info = await res.json();
      if (info.webSocketDebuggerUrl) return info.webSocketDebuggerUrl;
    } catch {}
    await sleep(150);
  }
  throw new Error('chrome did not start');
}

const ws = new WebSocket(await cdpEndpoint());
await new Promise((r) => (ws.onopen = r));
let nextId = 0;
const pending = new Map();
const eventWaiters = new Map();
ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve } = pending.get(msg.id);
    pending.delete(msg.id);
    resolve(msg.result ?? msg.error);
    return;
  }
  if (msg.method && eventWaiters.has(msg.method)) {
    for (const resolve of eventWaiters.get(msg.method)) resolve(msg.params);
    eventWaiters.delete(msg.method);
  }
};
const send = (method, params = {}, sessionId) =>
  new Promise((resolve) => {
    const id = ++nextId;
    pending.set(id, { resolve });
    ws.send(JSON.stringify({ id, method, params, sessionId }));
  });
const once = (method, timeoutMs) =>
  new Promise((resolve) => {
    const list = eventWaiters.get(method) || [];
    list.push(resolve);
    eventWaiters.set(method, list);
    if (timeoutMs) setTimeout(() => resolve(null), timeoutMs);
  });

const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
const call = (method, params) => send(method, params, sessionId);

await call('Page.enable');
await call('Runtime.enable');
await call('Network.enable');
await call('Performance.enable');

// Mid-range phone: 4x CPU slowdown, slow-4G network (1.6 Mbps, 150 ms RTT).
await call('Emulation.setDeviceMetricsOverride', {
  width: 390,
  height: 844,
  deviceScaleFactor: 3,
  mobile: true,
});
await call('Emulation.setCPUThrottlingRate', { rate: 4 });
await call('Network.setCacheDisabled', { cacheDisabled: true });
await call('Network.emulateNetworkConditions', {
  offline: false,
  latency: 150,
  downloadThroughput: (Number(process.env.NET_MBPS || 1.6) * 1024 * 1024) / 8,
  uploadThroughput: (750 * 1024) / 8,
});

await call('Page.addScriptToEvaluateOnNewDocument', {
  source: `
    window.__perf = { fcp: null, lcp: null, cls: 0, longtasks: [], lcpEl: null };
    new PerformanceObserver((l) => {
      for (const e of l.getEntries()) {
        if (e.name === 'first-contentful-paint') window.__perf.fcp = e.startTime;
      }
    }).observe({ type: 'paint', buffered: true });
    new PerformanceObserver((l) => {
      const es = l.getEntries();
      const last = es[es.length - 1];
      window.__perf.lcp = last.startTime;
      window.__perf.lcpEl = last.element ? last.element.tagName + '.' + (last.element.className || '') : null;
    }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver((l) => {
      for (const e of l.getEntries()) {
        window.__perf.cls += e.value;
        window.__perf.shifts = window.__perf.shifts || [];
        window.__perf.shifts.push({
          v: Number(e.value.toFixed(3)),
          t: Math.round(e.startTime),
          items: (e.sources || []).map((s) => {
            const n = s.node;
            return {
              el: n ? (n.tagName || n.nodeName) + (n.className ? '.' + String(n.className).slice(0, 40) : '') : '?',
              dy: s.previousRect && s.currentRect ? Math.round(s.currentRect.y - s.previousRect.y) : null,
              dx: s.previousRect && s.currentRect ? Math.round(s.currentRect.x - s.previousRect.x) : null,
            };
          }),
        });
      }
    }).observe({ type: 'layout-shift', buffered: true });
    new PerformanceObserver((l) => {
      for (const e of l.getEntries()) window.__perf.longtasks.push(Math.round(e.duration));
    }).observe({ type: 'longtask', buffered: true });
  `,
});

const repeat = process.argv.includes('--repeat');
const profile = process.argv.includes('--profile');
if (profile) {
  await call('Profiler.enable');
  await call('Profiler.setSamplingInterval', { interval: 150 });
}

if (repeat) {
  // Warm-up visit so the service worker installs and fills its cache; the
  // numbers below then describe a returning visitor.
  await call('Network.setCacheDisabled', { cacheDisabled: false });
  await call('Page.navigate', { url: `http://127.0.0.1:${PORT}/index.html` });
  await sleep(4000);
}

const loadPromise = once('Page.loadEventFired', 45000);
const navStart = Date.now();
const nav = await call('Page.navigate', { url: `http://127.0.0.1:${PORT}/index.html` });
if (nav && nav.errorText) throw new Error(nav.errorText);
if (profile) await call('Profiler.start');
const loadFired = await loadPromise;
const loadMs = loadFired ? Date.now() - navStart : -1;
await sleep(profile ? 2500 : 4000);

let profileTop = null;
if (profile) {
  const { profile: cpuProfile } = await call('Profiler.stop');
  const byId = new Map(cpuProfile.nodes.map((n) => [n.id, n]));
  const self = new Map();
  cpuProfile.samples.forEach((id, i) => {
    self.set(id, (self.get(id) || 0) + (cpuProfile.timeDeltas[i] || 0) / 1000);
  });
  const agg = new Map();
  for (const [id, ms] of self) {
    const frame = byId.get(id)?.callFrame;
    if (!frame) continue;
    const where = (frame.url || '').replace(/^http:\/\/127\.0\.0\.1:\d+\//, '/').split('?')[0];
    const key = `${frame.functionName || '(anonymous)'}  ${where}:${frame.lineNumber + 1}`;
    agg.set(key, (agg.get(key) || 0) + ms);
  }
  profileTop = [...agg.entries()]
    .filter(([key]) => !/\((idle|program|root)\)/.test(key))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 16)
    .map(([key, ms]) => ({ where: key, self_ms: Math.round(ms) }));
}

const scroll = profile
  ? { result: { value: null } }
  : await call('Runtime.evaluate', {
      awaitPromise: true,
      returnByValue: true,
      expression: `(async () => {
    const frames = [];
    let last = performance.now();
    const step = window.innerHeight * 0.6;
    for (let i = 0; i < 150; i++) {
      window.scrollBy(0, i < 75 ? step : -step);
      await new Promise((r) => requestAnimationFrame(r));
      const now = performance.now();
      frames.push(now - last);
      last = now;
    }
    const total = frames.reduce((a, b) => a + b, 0);
    const slow = frames.filter((f) => f > 33).length;
    return {
      fps: Math.round(1000 / (total / frames.length)),
      p95Frame: Math.round(frames.sort((a, b) => a - b)[Math.floor(frames.length * 0.95)]),
      slowFrames: slow + '/' + frames.length,
    };
  })()`,
      });

const metrics = await call('Performance.getMetrics');
const get = (name) => metrics.metrics.find((m) => m.name === name)?.value ?? null;
const page = await call('Runtime.evaluate', {
  returnByValue: true,
  expression: `(() => {
    const nav = performance.getEntriesByType('navigation')[0] || {};
    const res = performance.getEntriesByType('resource');
    return {
      perf: window.__perf,
      phases: (() => {
        const n = performance.getEntriesByType('navigation')[0] || {};
        const pick = (a, b) => Math.round((n[b] || 0) - (n[a] || 0));
        return {
          ttfb: Math.round(n.responseStart || 0),
          download: pick('responseStart', 'responseEnd'),
          parse_and_sync_script: pick('responseEnd', 'domInteractive'),
          deferred_and_subresources: pick('domInteractive', 'loadEventEnd'),
        };
      })(),
      nodes: document.querySelectorAll('*').length,
      domInteractive: Math.round(nav.domInteractive || 0),
      domContentLoaded: Math.round(nav.domContentLoadedEventEnd || 0),
      loadEvent: Math.round(nav.loadEventEnd || 0),
      transferKB: Math.round(res.reduce((a, r) => a + (r.transferSize || 0), 0) / 1024),
      requests: res.length,
      scriptKB: Math.round(res.filter((r) => (r.name || '').endsWith('.js')).reduce((a, r) => a + (r.transferSize || 0), 0) / 1024),
    };
  })()`,
});

const v = page.result.value;
console.log(JSON.stringify({
  label,
  loadEvent_ms: loadMs,
  FCP_ms: Math.round(v.perf.fcp ?? -1),
  LCP_ms: Math.round(v.perf.lcp ?? -1),
  LCP_element: v.perf.lcpEl,
  CLS: Number((v.perf.cls || 0).toFixed(3)),
  shifts: (v.perf.shifts || []).sort((a, b) => b.v - a.v).slice(0, 6),
  longtasks: v.perf.longtasks,
  longtask_total_ms: v.perf.longtasks.reduce((a, b) => a + b, 0),
  domInteractive_ms: v.domInteractive,
  domContentLoaded_ms: v.domContentLoaded,
  script_ms: Math.round((get('ScriptDuration') || 0) * 1000),
  task_ms: Math.round((get('TaskDuration') || 0) * 1000),
  layout_ms: Math.round((get('LayoutDuration') || 0) * 1000),
  style_recalcs: get('RecalcStyleCount'),
  layout_count: get('LayoutCount'),
  heap_MB: Number(((get('JSHeapUsedSize') || 0) / 1048576).toFixed(1)),
  phases: v.phases,
  nodes: v.nodes,
  subrequest_KB: v.transferKB,
  subrequests: v.requests,
  scroll: scroll.result.value,
  ...(profileTop ? { profile_top: profileTop } : {}),
}, null, 2));

ws.close();
chrome.kill();
server.close();
await sleep(300);
try { rmSync(profileDir, { recursive: true, force: true }); } catch {}
process.exit(0);



