"""Extract inline base64 images from index.html into optimized external assets.

Usage: python tools/extract_inline_images.py

Why: index.html was 7.79 MB, ~96% of which was three base64 data URIs. Base64
payloads cannot be cached, compressed well, lazy-loaded or parsed off the main
thread, so every mobile visit downloaded and decoded all of them before first
paint. Moving them to real files makes the HTML ~300 KB and lets the browser
fetch each screenshot only when the section that shows it is opened.
"""

import base64
import io
import os
import re
import shutil

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "index.html")
ASSETS = os.path.join(ROOT, "assets")
BACKUP = os.path.join(ROOT, "index.html.bak")

DATA_URI = re.compile(r"data:image/(png|jpeg|jpg|webp);base64,([A-Za-z0-9+/=]+)")

CONST_RE = re.compile(r"([A-Z][A-Za-z0-9_]{2,})\s*=\s*\"?$")
KEY_RE = re.compile(r"\"([A-Za-z0-9_.-]+)\"\s*:\s*(?:\{\s*\"src\"\s*:\s*)?\"?$")
OWNER_RE = re.compile(r"const\s+([A-Z][A-Za-z0-9_]*)\s*=")


def kebab(text):
    text = re.sub(r"([a-z0-9])([A-Z])", r"\1-\2", text)
    return re.sub(r"[^A-Za-z0-9]+", "-", text).strip("-").lower()


def pick_name(html, start, taken):
    ctx = html[max(0, start - 320):start]
    wide = html[max(0, start - 6000):start]
    const_match = CONST_RE.search(ctx)
    key_matches = [m for m in KEY_RE.finditer(ctx) if m.group(1).lower() != "src"]
    owner = OWNER_RE.findall(wide)

    # Nearest declaration wins: a bare data URI belongs to its const, an entry
    # inside an object literal belongs to "const key": {"src": ...}.
    const_name = kebab(const_match.group(1)) if const_match else ""
    if key_matches and (not const_match or key_matches[-1].end() >= const_match.end()):
        key = kebab(key_matches[-1].group(1))
        name = f"{kebab(owner[-1])}-{key}" if owner else key
    else:
        name = const_name
    if not name:
        name = "figure"

    candidate = name
    n = 2
    while candidate in taken:
        candidate = f"{name}-{n}"
        n += 1
    taken.add(candidate)
    return candidate


def encode(img, base_name, log):
    """Lossless when it stays small, otherwise a high-quality lossy WebP."""
    has_alpha = img.mode in ("RGBA", "LA", "P") and (
        img.mode != "P" or "transparency" in img.info
    )
    img = img.convert("RGBA" if has_alpha else "RGB")

    width, height = img.size
    lossless = None
    buf = io.BytesIO()
    img.save(buf, format="WEBP", lossless=True, quality=100, method=6)
    lossless = buf.getvalue()

    candidates = [("lossless", lossless)]
    if len(lossless) > 350 * 1024:
        for quality in (92, 88, 82):
            buf = io.BytesIO()
            img.save(buf, format="WEBP", quality=quality, method=6)
            candidates.append((f"q{quality}", buf.getvalue()))

    # Prefer the largest quality that still lands under ~450 KB.
    chosen_label, chosen = candidates[0]
    for label, data in candidates:
        if label == "lossless":
            continue
        if len(data) <= 450 * 1024:
            chosen_label, chosen = label, data
            break
        chosen_label, chosen = label, data  # best (smallest) fallback

    # Last resort for very heavy screenshots: cap the width and retry.
    if len(chosen) > 700 * 1024 and width > 1200:
        scale = 1200 / width
        resized = img.resize((1200, max(1, round(height * scale))), Image.LANCZOS)
        buf = io.BytesIO()
        resized.save(buf, format="WEBP", quality=90, method=6)
        chosen_label, chosen = "q90@1200px", buf.getvalue()
        width, height = resized.size

    path = os.path.join(ASSETS, base_name + ".webp")
    with open(path, "wb") as handle:
        handle.write(chosen)
    log.append(
        f"  {base_name}.webp  {width}x{height}  {chosen_label:12s} {len(chosen):>9,} bytes"
    )
    return path, {"w": width, "h": height}


def main():
    # Re-running against the pristine backup keeps the operation idempotent.
    source = BACKUP if ("--from-backup" in os.sys.argv and os.path.exists(BACKUP)) else SRC
    html = open(source, encoding="utf-8").read()
    original_size = len(html.encode("utf-8"))
    os.makedirs(ASSETS, exist_ok=True)
    print(f"source: {os.path.basename(source)} ({original_size:,} bytes)")

    if not os.path.exists(BACKUP):
        shutil.copy2(SRC, BACKUP)
        print(f"backup written: {os.path.basename(BACKUP)}")

    matches = list(DATA_URI.finditer(html))
    print(f"found {len(matches)} inline base64 images in index.html\n")

    taken, log, sizes = set(), [], {}
    out, cursor = [], 0
    for match in matches:
        name = pick_name(html, match.start(), taken)
        raw = base64.b64decode(match.group(2))
        img = Image.open(io.BytesIO(raw))
        img.load()
        path, dims = encode(img, name, log)
        sizes[name] = dims
        out.append(html[cursor:match.start()])
        out.append(f"assets/{name}.webp")
        cursor = match.end()
    out.append(html[cursor:])
    html = "".join(out)

    print("written:")
    print("\n".join(log))

    # The JS reads fixed width/height attributes; keep them in sync with any
    # resize the encoder had to perform.
    for name, dims in sizes.items():
        html = html.replace(
            f'src="assets/{name}.webp" width="1920" height="1080"',
            f'src="assets/{name}.webp" width="{dims["w"]}" height="{dims["h"]}"',
        )

    leftovers = len(DATA_URI.findall(html))
    assert leftovers == 0, f"{leftovers} data URIs left behind"
    assert "</html>" in html, "html end tag missing"

    with open(SRC, "w", encoding="utf-8", newline="") as handle:
        handle.write(html)

    new_size = len(html.encode("utf-8"))
    print(
        f"\nindex.html: {original_size:,} -> {new_size:,} bytes "
        f"({new_size / original_size:.1%} of original)"
    )


if __name__ == "__main__":
    main()
