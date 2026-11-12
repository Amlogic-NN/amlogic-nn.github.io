"""Stamp the script URL with a content hash so HTML and JS can never skew.

Editing assets/app.js changes its hash, which changes the URL in index.html, so a
browser holding the old HTML keeps loading the old (matching) JS, and a browser
with new HTML can never pair it with stale JS.

Usage: python tools/stamp_assets.py
"""

import hashlib
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX = os.path.join(ROOT, "index.html")
ASSETS = ("assets/app.js",)


def main():
    html = open(INDEX, encoding="utf-8").read()
    before = html
    stamps = {}

    for asset in ASSETS:
        path = os.path.join(ROOT, asset.replace("/", os.sep))
        digest = hashlib.sha1(open(path, "rb").read()).hexdigest()[:8]
        stamps[asset] = digest
        pattern = re.compile(r"(src=\")" + re.escape(asset) + r"(?:\?v=[0-9a-f]+)?(\")")
        html, n = pattern.subn(rf"\g<1>{asset}?v={digest}\g<2>", html)
        print(f"{asset}: v={digest} ({n} reference{'s' if n != 1 else ''})")

    if html == before:
        print("index.html already up to date")
    else:
        open(INDEX, "w", encoding="utf-8", newline="").write(html)
        print("index.html updated")

    # fail loudly in CI if a stale stamp survived
    for asset, digest in stamps.items():
        assert f"{asset}?v={digest}" in html, f"stamp missing for {asset}"
    return 0


if __name__ == "__main__":
    sys.exit(main())
