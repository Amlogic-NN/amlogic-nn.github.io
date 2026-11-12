"""Local preview server for the portal: threaded, gzip, no-cache.

`python -m http.server` sends app.js uncompressed (241 KB instead of 74 KB) and is
easy to kill; this one behaves closer to GitHub Pages while reviewing.

Usage: python tools/serve.py [port] [--bind host]
"""

import gzip
import os
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEXT = (".html", ".js", ".css", ".json", ".svg", ".webmanifest")


class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def send_head(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()
        if not os.path.isfile(path):
            return super().send_head()

        accepts = self.headers.get("Accept-Encoding", "")
        if not path.lower().endswith(TEXT) or "gzip" not in accepts:
            return super().send_head()

        try:
            with open(path, "rb") as handle:
                body = gzip.compress(handle.read(), 6)
        except OSError:
            return super().send_head()

        self.send_response(200)
        self.send_header("Content-Type", self.guess_type(path))
        self.send_header("Content-Encoding", "gzip")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Vary", "Accept-Encoding")
        self.end_headers()
        return __import__("io").BytesIO(body)


def main():
    port = 8765
    host = "127.0.0.1"
    args = sys.argv[1:]
    if args and args[0].isdigit():
        port = int(args[0])
    if "--bind" in args:
        host = args[args.index("--bind") + 1]

    server = ThreadingHTTPServer((host, port), partial(Handler, directory=ROOT))
    print(f"serving {ROOT} at http://{host}:{port}/")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
