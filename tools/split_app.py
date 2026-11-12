"""One-off structural split, kept as a record of how the current layout was produced.

index.html used to carry everything inline. It now carries only markup + CSS
(~58 KB) and loads `assets/app.js` (deferred) and the benchmark dataset
(`assets/perf.json`) on demand.

Run only on the original single-file layout; it is not idempotent.
"""

import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX = os.path.join(ROOT, "index.html")
APP = os.path.join(ROOT, "assets", "app.js")

SW = """/* Service worker: stale-while-revalidate for the portal shell.
   Repeats are served from cache immediately and refreshed in the background, so
   the next visit picks up new content without any version bookkeeping. */
const CACHE = 'amlogic-portal';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(respond(request));
});

async function respond(request) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(request);
  const network = fetch(request)
    .then((response) => {
      if (response && response.ok && response.type === 'basic') cache.put(request, response.clone());
      return response;
    })
    .catch(() => hit);
  return hit || network;
}
"""

PERF_LOADER = """let PERF_DATA=null;
function loadPerfData(){return loadPerfData.promise||(loadPerfData.promise=fetch('assets/perf.json').then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(d=>{PERF_DATA=d;return d}))}
"""


def main():
    html = open(INDEX, encoding="utf-8").read()
    original = len(html.encode())

    # 1. benchmark dataset out of the document, loaded on demand
    start = html.index("const PERF_DATA=")
    end = html.index(";\nconst PERF_CONFIG", start)
    literal = html[start + len("const PERF_DATA="):end].strip()
    data = json.loads(literal)
    os.makedirs(os.path.dirname(APP), exist_ok=True)
    with open(os.path.join(ROOT, "assets", "perf.json"), "w", encoding="utf-8") as handle:
        json.dump(data, handle, ensure_ascii=False, separators=(",", ":"))
    html = html[:start] + PERF_LOADER + html[end + 1:]

    # 2. the performance view must wait for the dataset
    guard_anchor = "function renderPerf(){const host=document.getElementById('performance');"
    assert guard_anchor in html
    html = html.replace(
        guard_anchor,
        "function renderPerf(){const host=document.getElementById('performance');"
        "if(!PERF_DATA){host.innerHTML='<p class=\"perf-note\">Loading benchmark data…</p>';"
        "loadPerfData().then(renderPerf,()=>{host.innerHTML='<p class=\"perf-note\">Could not load benchmark data.</p>'});return}",
    )

    # 3. drop dead duplicates that were overridden later in the script
    script_start = html.rindex("<script>") + len("<script>")
    script_end = html.rindex("</script>")
    js = html[script_start:script_end]
    lines = js.split("\n")

    def is_top(line):
        return bool(
            re.match(
                r"^(?:function\s+[A-Za-z_$][\w$]*\s*\(|(?:const|let|var)\s+[A-Za-z_$][\w$]*\s*="
                r"|(?:renderCards|renderOverview)\s*=\s*function)",
                line,
            )
        )

    removed = []
    dead_start = next(i for i, l in enumerate(lines) if l.startswith("function renderOverview(){"))
    dead_end = dead_start + 1
    while dead_end < len(lines) and not is_top(lines[dead_end]):
        dead_end += 1
    removed.append(("dead renderOverview", sum(len(x) + 1 for x in lines[dead_start:dead_end])))
    del lines[dead_start:dead_end]

    stub = next(
        i
        for i, l in enumerate(lines)
        if l.startswith("function renderLLMQuick(){") and len(l) < 1000
    )
    removed.append(("dead renderLLMQuick stub", len(lines[stub]) + 1))
    del lines[stub]

    js = "\n".join(lines)
    for name, size in removed:
        print(f"removed {name}: {size:,} chars")
    html = html[:script_start] + js + html[script_end:]

    # 4. all inline JS becomes one deferred, cacheable file
    blocks = list(re.finditer(r"<script[^>]*>(.*?)</script>", html, re.S))
    assert len(blocks) == 2, f"expected 2 script blocks, found {len(blocks)}"
    bodies = [m.group(1) for m in blocks]
    bodies.append(
        "if('serviceWorker' in navigator){addEventListener('load',function(){"
        "navigator.serviceWorker.register('sw.js').catch(function(){})})}"
    )
    with open(APP, "w", encoding="utf-8", newline="") as handle:
        handle.write("\n".join(bodies))

    # Single pass over the original offsets: replacing sequentially would shift
    # every later match and silently truncate the document.
    defer_tag = '<script defer src="assets/app.js"></script>'
    out, cursor = [], 0
    for index, match in enumerate(blocks):
        out.append(html[cursor:match.start()])
        if index == 0:
            out.append(defer_tag)
        cursor = match.end()
    out.append(html[cursor:])
    html = "".join(out)

    assert html.rstrip().endswith("</html>"), "document was truncated"
    assert html.count("<script") == 1, "expected exactly one script tag"
    assert "const SECTIONS" not in html, "inline JS survived the split"
    assert "const PERF_DATA" not in html, "benchmark data survived the split"

    with open(os.path.join(ROOT, "sw.js"), "w", encoding="utf-8", newline="") as handle:
        handle.write(SW)

    # 5. the extracted JS is now the source of truth, not the document
    with open(INDEX, "w", encoding="utf-8", newline="") as handle:
        handle.write(html)

    print(f"index.html: {original:,} -> {len(html.encode()):,} bytes")
    print(f"assets/app.js: {os.path.getsize(APP):,} bytes")
    print(f"assets/perf.json: {os.path.getsize(os.path.join(ROOT,'assets','perf.json')):,} bytes")
    return 0


if __name__ == "__main__":
    sys.exit(main())
