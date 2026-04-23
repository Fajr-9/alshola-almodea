#!/usr/bin/env python3
"""
Stronger packshot cleanup for a fixed list of product images that still show
uneven grey/cream backgrounds after the global --all pass.

Uses: RGBA on #FFFFFF, then flood-fill from the full image border where the
pixel matches ANY corner colour (handles gradients), then a very conservative
near-white snap.
"""
from __future__ import annotations

import sys
from collections import deque
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("pip install Pillow", file=sys.stderr)
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
BASE = ROOT / "assets/Products Img/New Img"

# After PNG cleanup, write lossless WebP twins for main card images (match FD-LL-4401 style).
MAIN_CARD_PNG_TO_WEBP = [
    "External LIGHT-Pic/LL-4510.png",
    "External LIGHT-Pic/LL-5488.png",
    "External LIGHT-Pic/LL-696.png",
    "Flood-Light-Pic/LL-4006.png",
    "Flood-Light-Pic/LL-4110.png",
    "Flood-Light-Pic/LL-4410.png",
    "Flood-Light-Pic/LL-4414.png",
    "Flood-Light-Pic/LL-4415.png",
    "Flood-Light-Pic/LL-4416.png",
    "Flood-Light-Pic/LL-4420.png",
]

# Relative paths under New Img — all gallery + main assets for the listed SKUs
REL_PATHS = [
    "External LIGHT-Pic/LL-4583-1.webp",
    "External LIGHT-Pic/LL-4583-2.webp",
    "External LIGHT-Pic/LL-4583-2,1.webp",
    "External LIGHT-Pic/LL-4583-2,2.webp",
    "External LIGHT-Pic/LL-4583.png",
    "External LIGHT-Pic/LL-4583,1.png",
    "External LIGHT-Pic/LL-4583,2.png",
    "External LIGHT-Pic/LL-4584-2.webp",
    "External LIGHT-Pic/LL-4584.png",
    "External LIGHT-Pic/LL-4584,1.png",
    "External LIGHT-Pic/LL-4584,2.png",
    "External LIGHT-Pic/LL-4510.png",
    "External LIGHT-Pic/LL-4510,1.png",
    "External LIGHT-Pic/LL-4510,2.png",
    "External LIGHT-Pic/LL-5488.png",
    "External LIGHT-Pic/LL-5488,1.png",
    "External LIGHT-Pic/LL-5488,2.png",
    "External LIGHT-Pic/LL-696.png",
    "External LIGHT-Pic/LL-696,1.png",
    "External LIGHT-Pic/LL-696,2.png",
    "Flood-Light-Pic/LL-4006.png",
    "Flood-Light-Pic/LL-4006,1.png",
    "Flood-Light-Pic/LL-4006,2.png",
    "Flood-Light-Pic/LL-4110.png",
    "Flood-Light-Pic/LL-4110,1.png",
    "Flood-Light-Pic/LL-4110,2.png",
    "Flood-Light-Pic/LL-4410.png",
    "Flood-Light-Pic/LL-4410,1.png",
    "Flood-Light-Pic/LL-4410,2.png",
    "Flood-Light-Pic/LL-4414.png",
    "Flood-Light-Pic/LL-4414,1.png",
    "Flood-Light-Pic/LL-4414,2.png",
    "Flood-Light-Pic/LL-4415.png",
    "Flood-Light-Pic/LL-4415,1.png",
    "Flood-Light-Pic/LL-4415,2.png",
    "Flood-Light-Pic/LL-4416.png",
    "Flood-Light-Pic/LL-4416,1.png",
    "Flood-Light-Pic/LL-4416,2.png",
    "Flood-Light-Pic/LL-4420.png",
    "Flood-Light-Pic/LL-4420,1.png",
    "Flood-Light-Pic/LL-4420,2.png",
]


def _dist(a: tuple[int, int, int], b: tuple[int, int, int]) -> int:
    return max(abs(a[0] - b[0]), abs(a[1] - b[1]), abs(a[2] - b[2]))


def _near_any_corner(
    c: tuple[int, int, int], corners: list[tuple[int, int, int]], tol: int
) -> bool:
    return min(_dist(c, ci) for ci in corners) <= tol


def _flatten_rgba_on_white(im: Image.Image) -> Image.Image:
    rgba = im.convert("RGBA")
    w, h = rgba.size
    bg = Image.new("RGB", (w, h), (255, 255, 255))
    bg.paste(rgba, mask=rgba.split()[3])
    return bg


def _border_multi_corner_flood(
    rgb: Image.Image,
    tolerance: int = 48,
    max_fill_ratio: float = 0.93,
) -> Image.Image:
    w, h = rgb.size
    px = rgb.load()
    corners = [
        px[0, 0],
        px[w - 1, 0],
        px[0, h - 1],
        px[w - 1, h - 1],
    ]
    visited = [[False] * w for _ in range(h)]
    q: deque[tuple[int, int]] = deque()

    def try_seed(x: int, y: int) -> None:
        if not (0 <= x < w and 0 <= y < h) or visited[y][x]:
            return
        c = px[x, y]
        if _near_any_corner(c, corners, tolerance):
            visited[y][x] = True
            q.append((x, y))

    for x in range(w):
        try_seed(x, 0)
        try_seed(x, h - 1)
    for y in range(h):
        try_seed(0, y)
        try_seed(w - 1, y)

    filled = 0
    while q:
        x, y = q.popleft()
        px[x, y] = (255, 255, 255)
        filled += 1
        if filled > w * h * max_fill_ratio:
            break
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
                c = px[nx, ny]
                if _near_any_corner(c, corners, tolerance):
                    visited[ny][nx] = True
                    q.append((nx, ny))
    return rgb


def _snap_near_neutral_white(rgb: Image.Image) -> None:
    """Flatten studio greys / banding in near-white backgrounds (neutral tones only)."""
    px = rgb.load()
    w, h = rgb.size
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            lo, hi = min(r, g, b), max(r, g, b)
            span = hi - lo
            avg = (r + g + b) // 3
            if r >= 250 and g >= 250 and b >= 250:
                px[x, y] = (255, 255, 255)
                continue
            if lo >= 245 and span <= 8:
                px[x, y] = (255, 255, 255)
                continue
            if lo >= 240 and span <= 12:
                px[x, y] = (255, 255, 255)
                continue
            # Kill light neutral grey streaks in white fields (avg high, almost grey)
            if avg >= 246 and span <= 16:
                px[x, y] = (255, 255, 255)


def _save(path: Path, rgb: Image.Image) -> None:
    ext = path.suffix.lower()
    if ext == ".png":
        rgb.save(path, format="PNG", optimize=True)
    elif ext == ".webp":
        try:
            rgb.save(path, format="WEBP", lossless=True, method=6)
        except Exception:
            rgb.save(path, format="WEBP", quality=98, method=6)
    elif ext in (".jpg", ".jpeg"):
        rgb.save(path, format="JPEG", quality=96, subsampling=0, optimize=True)
    else:
        raise ValueError(ext)


def process_one(path: Path) -> str:
    im = Image.open(path)
    if getattr(im, "n_frames", 1) > 1:
        return f"SKIP animated: {path.name}"
    rgb = _flatten_rgba_on_white(im)
    corners = [
        rgb.getpixel((0, 0)),
        rgb.getpixel((rgb.size[0] - 1, 0)),
        rgb.getpixel((0, rgb.size[1] - 1)),
        rgb.getpixel((rgb.size[0] - 1, rgb.size[1] - 1)),
    ]
    if min(min(c) for c in corners) < 252:
        rgb = _border_multi_corner_flood(rgb, tolerance=48, max_fill_ratio=0.93)
    _snap_near_neutral_white(rgb)
    _save(path, rgb)
    return f"OK {path.relative_to(BASE)} -> {rgb.size[0]}x{rgb.size[1]}"


def main() -> None:
    lines: list[str] = []
    for rel in REL_PATHS:
        p = BASE / rel
        if not p.is_file():
            lines.append(f"MISSING {rel}")
            continue
        try:
            lines.append(process_one(p))
        except Exception as e:
            lines.append(f"ERR {rel}: {e}")
    for rel in MAIN_CARD_PNG_TO_WEBP:
        p = BASE / rel
        if not p.is_file():
            lines.append(f"SKIP webp twin missing png: {rel}")
            continue
        try:
            rgb = Image.open(p).convert("RGB")
            wpath = p.with_suffix(".webp")
            _save(wpath, rgb)
            lines.append(f"WEBP {wpath.relative_to(BASE)}")
        except Exception as e:
            lines.append(f"ERR webp {rel}: {e}")

    # Gallery angles: *,1.png / *,2.png -> lossless *.webp (modal thumbnails match main card quality)
    for rel in REL_PATHS:
        if ",1.png" not in rel and ",2.png" not in rel:
            continue
        p = BASE / rel
        if not p.is_file():
            lines.append(f"SKIP webp-gallery missing: {rel}")
            continue
        try:
            rgb = Image.open(p).convert("RGB")
            wpath = p.with_suffix(".webp")
            _save(wpath, rgb)
            lines.append(f"WEBP-GALLERY {wpath.relative_to(BASE)}")
        except Exception as e:
            lines.append(f"ERR webp-gallery {rel}: {e}")

    log = Path(__file__).resolve().parent / "reports" / "fix-hotspot-bg.log"
    log.parent.mkdir(parents=True, exist_ok=True)
    log.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print("\n".join(lines))


if __name__ == "__main__":
    main()
