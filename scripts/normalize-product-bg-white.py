#!/usr/bin/env python3
"""
Normalize all catalog product images to a clean #FFFFFF studio background (like FD-LL-4401.webp).

- Flattens alpha onto white, then flood-fills near-corner background tones to pure white.
- Supports .png, .webp, .jpeg / .jpg under assets/Products Img/New Img.
- WebP is written lossless when the encoder supports it (avoids banding/artifacts in whites).
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Install Pillow: pip install Pillow", file=sys.stderr)
    sys.exit(1)

IMAGE_SUFFIXES = {".png", ".webp", ".jpg", ".jpeg"}

# Legacy: only these if neither --all nor --all-new-img-png
DEFAULT_REL_PATHS = [
    "External LIGHT-Pic/LL-4510.png",
    "External LIGHT-Pic/LL-4510,1.png",
    "External LIGHT-Pic/LL-4510,2.png",
    "External LIGHT-Pic/LL-696.png",
    "External LIGHT-Pic/LL-696,1.png",
    "External LIGHT-Pic/LL-696,2.png",
    "External LIGHT-Pic/LL-5488.png",
    "External LIGHT-Pic/LL-5488,1.png",
    "External LIGHT-Pic/LL-5488,2.png",
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


def _flood_background_to_white(
    rgb: Image.Image,
    tolerance: int = 30,
    max_fill_ratio: float = 0.82,
) -> Image.Image:
    w, h = rgb.size
    px = rgb.load()
    corners = [
        px[0, 0],
        px[w - 1, 0],
        px[0, h - 1],
        px[w - 1, h - 1],
    ]
    ref = (
        sum(c[0] for c in corners) // 4,
        sum(c[1] for c in corners) // 4,
        sum(c[2] for c in corners) // 4,
    )
    visited = [[False] * w for _ in range(h)]
    seeds: list[tuple[int, int]] = [
        (0, 0),
        (w - 1, 0),
        (0, h - 1),
        (w - 1, h - 1),
        (w // 2, 0),
        (w // 2, h - 1),
        (0, h // 2),
        (w - 1, h // 2),
    ]
    stack = list(seeds)
    filled = 0
    while stack:
        x, y = stack.pop()
        if x < 0 or y < 0 or x >= w or y >= h or visited[y][x]:
            continue
        c = px[x, y]
        if _dist(c, ref) > tolerance:
            continue
        visited[y][x] = True
        filled += 1
        if filled > w * h * max_fill_ratio:
            return rgb
        px[x, y] = (255, 255, 255)
        stack.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])
    return rgb


def flatten_source_to_rgb(im: Image.Image) -> Image.Image:
    rgba = im.convert("RGBA")
    w, h = rgba.size
    white = Image.new("RGB", (w, h), (255, 255, 255))
    white.paste(rgba, mask=rgba.split()[3])
    px = white.load()
    corners = [px[0, 0], px[w - 1, 0], px[0, h - 1], px[w - 1, h - 1]]
    if min(min(c) for c in corners) < 251:
        white = _flood_background_to_white(white, tolerance=30, max_fill_ratio=0.82)
    return white


def _save_webp_lossless(rgb: Image.Image, path: Path) -> None:
    try:
        rgb.save(path, format="WEBP", lossless=True, method=6)
    except Exception:
        rgb.save(path, format="WEBP", quality=98, method=6)


def process_image_file(path: Path, jpeg_quality: int = 96) -> tuple[int, int, str]:
    im = Image.open(path)
    n_frames = getattr(im, "n_frames", 1)
    if n_frames > 1:
        raise ValueError("animated/multi-frame image not supported")
    rgb = flatten_source_to_rgb(im)
    ext = path.suffix.lower()
    if ext == ".png":
        rgb.save(path, format="PNG", optimize=True)
    elif ext == ".webp":
        _save_webp_lossless(rgb, path)
    elif ext in (".jpg", ".jpeg"):
        rgb.save(
            path,
            format="JPEG",
            quality=jpeg_quality,
            subsampling=0,
            optimize=True,
        )
    else:
        raise ValueError(f"unsupported extension {ext}")
    return rgb.size[0], rgb.size[1], "RGB"


def _collect_all_images(base: Path) -> list[str]:
    rels: list[str] = []
    for p in sorted(base.rglob("*")):
        if not p.is_file():
            continue
        if p.suffix.lower() in IMAGE_SUFFIXES:
            rels.append(p.relative_to(base).as_posix())
    return rels


def main() -> None:
    ap = argparse.ArgumentParser(
        description="Normalize product images to clean #FFFFFF backgrounds."
    )
    ap.add_argument(
        "--base",
        type=Path,
        default=Path(__file__).resolve().parents[1]
        / "assets/Products Img/New Img",
        help="Root folder (default: assets/Products Img/New Img)",
    )
    ap.add_argument(
        "--all",
        action="store_true",
        help="Process every .png / .webp / .jpg under --base (full catalog)",
    )
    ap.add_argument(
        "--all-new-img-png",
        action="store_true",
        help="Process every .png only under --base",
    )
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--jpeg-quality", type=int, default=96, help="JPEG quality (default 96)")
    args = ap.parse_args()
    base: Path = args.base.expanduser().resolve()
    report: list[str] = []

    if args.all:
        rels = _collect_all_images(base)
    elif args.all_new_img_png:
        rels = sorted(
            p.relative_to(base).as_posix()
            for p in base.rglob("*.png")
            if p.is_file()
        )
    else:
        rels = DEFAULT_REL_PATHS

    ok = 0
    for rel in rels:
        path = base / rel
        if not path.is_file():
            report.append(f"SKIP missing: {rel}")
            continue
        if path.suffix.lower() not in IMAGE_SUFFIXES:
            report.append(f"SKIP ext: {rel}")
            continue
        if args.dry_run:
            report.append(f"DRY: {rel}")
            continue
        try:
            w, h, mode = process_image_file(path, jpeg_quality=args.jpeg_quality)
            report.append(f"OK {rel} -> {w}x{h} {mode}")
            ok += 1
        except Exception as e:
            report.append(f"ERR {rel}: {e}")

    report.append(f"--- done: {ok} files updated under {base}")
    out_log = Path(__file__).resolve().parent / "reports" / "normalize-white-bg.log"
    out_log.parent.mkdir(parents=True, exist_ok=True)
    out_log.write_text("\n".join(report) + "\n", encoding="utf-8")
    print("\n".join(report))


if __name__ == "__main__":
    main()
