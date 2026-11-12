# tools/

Helper scripts and notes for maintaining the portal. Everything drives headless
Chrome over CDP; nothing is installed, only Node 22+ and Python + Pillow.

## File layout (changed from the old single-file design)

| Path | What it is |
|---|---|
| `index.html` | markup + CSS + the pre-rendered home view (~59 KB) |
| `assets/app.js` | all portal logic, loaded with `defer` (~231 KB, cacheable + V8 code cache) |
| `assets/perf.json` | benchmark dataset, fetched only when the Performance view opens |
| `assets/*.webp` | figures, all lazy-loaded |
| `sw.js` | service worker (stale-while-revalidate) for repeat visits |

Edit application logic in **`assets/app.js`**, markup/CSS in `index.html`.

## After editing app.js, re-stamp the asset URL

```powershell
python tools/stamp_assets.py
```

The script tag carries the file's hash (`assets/app.js?v=a75326ef`). Without it a
browser can pair a cached `app.js` with fresh HTML — the exact failure that once
left the Quick Start pages blank after the `.banner` block was removed. `smoke_nav.mjs`
asserts the stamp matches, so a forgotten step fails the suite instead of shipping.

## Mobile navigation

On phones the sidebar is replaced by a single 52px bar (`☰ Menu` + logo) plus an
off-canvas drawer. The drawer list is a live mirror of `#nav` (`#drawer-nav`), so
new sections appear in both automatically; the open/close logic is `initDrawer()`
in `app.js`, the visuals are the `.drawer*` / `.menu-toggle` rules in `index.html`.
The `Menu` label follows the UI language — if you add a language, extend
`syncLabel()` too.

## After changing the home view, re-run the pre-render

The home markup is baked into `<section id="overview" data-prerender="home">`.
`adoptHome()` reuses it on first load instead of rebuilding; the renderer is only
used again for search and language switches.

```powershell
node tools/prerender_home.mjs .
node tools/smoke_nav.mjs .
```

`smoke_nav.mjs` compares the baked markup against a fresh render and reports
`prerender.match: false` if they drift, so stale pre-renders cannot ship quietly.
It also fails on any console/log error — a truncated document or a broken inline
script shows up there and nowhere else.

## Scripts

| Script | Purpose |
|---|---|
| `prerender_home.mjs` | Rebuild the baked home markup. |
| `smoke_nav.mjs` | Regression suite: all nav sections, zh/en, home search, perf data, service worker, pre-render drift, zero console errors. |
| `measure.mjs` | Throttled benchmark: FCP/LCP/CLS, long tasks, navigation phases, scroll FPS, `--profile` CPU profile, `--repeat` returning-visitor timings. |
| `style_fingerprint.mjs` | Hashes computed styles per section; diff two runs to prove a CSS change did not alter the cascade. |
| `layout_trace.mjs` | Samples shell geometry during load; use it when investigating layout shift. |
| `screenshot.mjs` | Phone/desktop screenshots for a visual check. |
| `serve_check.py` | Serves the site and fetches every referenced asset, verifying status and byte count. |
| `extract_inline_images.py` | Re-extracts base64 `data:` images if any get added again. |
| `merge_styles.py` | Merges `<style>` blocks; refuses to write unless the CSS text is unchanged. |
| `split_app.py` | One-off record of how inline JS/perf data were extracted into `assets/`. Not idempotent. |

## Measuring

```powershell
# first visit, slow-4G + 4x CPU (default, deliberately harsh)
node tools/measure.mjs . first

# returning visitor (warms the service worker first)
node tools/measure.mjs . repeat --repeat

# normal 4G
$env:NET_MBPS='9'; node tools/measure.mjs . fast; Remove-Item Env:\NET_MBPS
```

Use medians of 3 runs: single-run paint timings swing by ±300 ms. The harness
serves text assets gzip-compressed, the way GitHub Pages does — do not "fix" the
server into sending raw bytes, or a 326 KB document looks like 1.6 s of download
and every conclusion goes wrong.

## Service worker behaviour

`sw.js` answers from cache immediately and refreshes in the background, so after
a deploy a returning visitor may see the previous version once and the new one on
their next visit. There is no version constant to bump. If you need to force a
refresh during testing, DevTools → Application → Service Workers → Unregister.

## Repo hygiene

`index.html.bak` is the original 7.79 MB snapshot. It is untracked and must not be
committed — `git checkout -- index.html` is the real rollback.
