"""Local smoke test: serve the portal over HTTP and fetch every referenced asset.

Usage: python tools/serve_check.py
"""

import gzip
import os
import re
import threading
import urllib.request
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def main():
    handler = partial(SimpleHTTPRequestHandler, directory=ROOT)
    handler.log_message = lambda *a, **k: None
    server = ThreadingHTTPServer(("127.0.0.1", 0), handler)
    port = server.server_address[1]
    threading.Thread(target=server.serve_forever, daemon=True).start()
    base = f"http://127.0.0.1:{port}/"

    def fetch(path):
        with urllib.request.urlopen(base + path) as response:
            return response.status, response.headers.get("Content-Type"), response.read()

    status, ctype, body = fetch("index.html")
    print(f"GET /index.html -> {status} {ctype} {len(body):,} bytes ({len(gzip.compress(body)):,} gzipped)")

    html = body.decode("utf-8")
    assets = sorted(set(re.findall(r"assets/[A-Za-z0-9._-]+\.(?:webp|png|jpg|svg|js|json)", html)))
    if os.path.exists(os.path.join(ROOT, "sw.js")):
        assets.append("sw.js")
    total = 0
    for asset in assets:
        status, ctype, data = fetch(asset)
        on_disk = os.path.getsize(os.path.join(ROOT, asset.replace("/", os.sep)))
        total += len(data)
        ok = "ok" if status == 200 and len(data) == on_disk else "MISMATCH"
        print(f"  GET /{asset:<45s} -> {status} {ctype:<12s} {len(data):>9,} bytes  {ok}")

    print(f"\nfirst-load transfer (html only): {len(body):,} bytes raw / {len(gzip.compress(body)):,} gzipped")
    print(f"all assets on demand:            {total:,} bytes")
    server.shutdown()


if __name__ == "__main__":
    main()
