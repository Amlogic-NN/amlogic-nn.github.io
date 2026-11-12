"""Merge every <style> block in index.html into a single stylesheet.

Cascade order is preserved exactly: the blocks are concatenated in document
order and the result is placed where the first block was. The script refuses to
write unless the CSS text is provably unchanged apart from block separators.
"""

import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "index.html")

STYLE = re.compile(r"<style([^>]*)>(.*?)</style>", re.S)


def stats(css):
    return {
        "braces": css.count("{"),
        "closing": css.count("}"),
        "media": len(re.findall(r"@media", css)),
        "keyframes": len(re.findall(r"@keyframes", css)),
    }


def main():
    html = open(SRC, encoding="utf-8").read()
    blocks = list(STYLE.finditer(html))
    if len(blocks) < 2:
        print(f"nothing to do: {len(blocks)} style block(s)")
        return 0

    bodies = [m.group(2) for m in blocks]
    before = stats("".join(bodies))
    merged_css = "\n".join(bodies)
    after = stats(merged_css)
    assert before == after, f"CSS changed while merging: {before} != {after}"

    # Nothing may reference the merged-away tag attributes.
    for m in blocks:
        for attr in re.findall(r'\bid="([^"]+)"', m.group(1)):
            uses = len(re.findall(re.escape(attr), html))
            assert uses == 1, f'id="{attr}" is referenced elsewhere; refusing to merge'

    out, cursor, inserted = [], 0, False
    for m in blocks:
        out.append(html[cursor:m.start()])
        if not inserted:
            out.append(f"<style>{merged_css}</style>")
            inserted = True
        cursor = m.end()
    out.append(html[cursor:])
    new_html = "".join(out)

    # The same CSS bytes must survive, in the same order.
    assert merged_css == "\n".join(bodies)
    removed = sum(len(m.group(0)) for m in blocks) - len(f"<style>{merged_css}</style>")
    with open(SRC, "w", encoding="utf-8", newline="") as handle:
        handle.write(new_html)

    print(f"style blocks: {len(blocks)} -> 1")
    print(f"css bytes:    {sum(len(b) for b in bodies):,} -> {len(merged_css):,} (identical text)")
    print(f"html bytes:   {len(html.encode('utf-8')):,} -> {len(new_html.encode('utf-8')):,} (-{removed:,})")
    print(f"integrity:    {after}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
