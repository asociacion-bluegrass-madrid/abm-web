# Illustration pipeline: public-domain scans and logos -> clean single-ink SVGs or transparent PNGs.
# Usage:
#   ilustrar.py vector  entrada salida.svg --recorte x,y,w,h [--modo oscuro|color|figura] [--umbral 0-255] [--escala 3] [--circulo cx,cy,r]
#   ilustrar.py sinfondo entrada salida.png [--recorte x,y,w,h] [--blanco 235]
import argparse
import re

import numpy as np
import potrace
from PIL import Image, ImageFilter, ImageOps


def recortar(im, recorte):
    if not recorte:
        return im
    x, y, w, h = (int(v) for v in recorte.split(","))
    return im.crop((x, y, x + w, y + h))


def mascara(im, modo, umbral):
    """True where there is ink. 'oscuro': dark pixels. 'color': anything not near-white paper (saturated or dark)."""
    rgb = np.asarray(im.convert("RGB"), dtype=np.float32)
    luz = rgb.mean(axis=2)
    if modo == "oscuro":
        return luz < umbral
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    sat = rgb.max(axis=2) - rgb.min(axis=2)
    tinta = (luz < umbral) | (sat > 60)
    if modo == "figura":  # heraldic scans: keep greens and browns, drop the blue border and white field
        return tinta & ~((b > r + 15) & (b >= g))
    return tinta


def vector(args):
    im = recortar(Image.open(args.entrada), args.recorte)
    # Upscale and smooth first so the tracer follows curves, not pixel steps.
    im = im.resize((im.width * args.escala, im.height * args.escala), Image.LANCZOS).filter(ImageFilter.GaussianBlur(args.escala * 0.6))
    m = mascara(im, args.modo, args.umbral)
    if args.circulo:  # keep only ink inside these circles (fractions of width/height), to drop map hatching around a motif
        yy, xx = np.mgrid[0:m.shape[0], 0:m.shape[1]]
        dentro = np.zeros_like(m)
        for c in args.circulo:
            cx, cy, r = (float(v) for v in c.split(","))
            dentro |= (xx - cx * m.shape[1]) ** 2 + (yy - cy * m.shape[0]) ** 2 < (r * m.shape[1]) ** 2
        m &= dentro
    bn = Image.fromarray(np.where(m, 0, 255).astype(np.uint8)).filter(ImageFilter.MedianFilter(5))
    # potracer fills the low (False) pixels, so ink must be False here.
    curvas = potrace.Bitmap(np.asarray(bn) >= 128).trace(turdsize=args.motas, alphamax=1.0, opticurve=True, opttolerance=0.2)
    trazos = []
    for c in curvas:
        d = [f"M{c.start_point.x:.1f},{c.start_point.y:.1f}"]
        for s in c.segments:
            if s.is_corner:
                d.append(f"L{s.c.x:.1f},{s.c.y:.1f}L{s.end_point.x:.1f},{s.end_point.y:.1f}")
            else:
                d.append(f"C{s.c1.x:.1f},{s.c1.y:.1f} {s.c2.x:.1f},{s.c2.y:.1f} {s.end_point.x:.1f},{s.end_point.y:.1f}")
        trazos.append("".join(d) + "Z")
    # Single ink: the path takes the CSS text colour, so the same file works on kraft, tabaco or crema.
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {bn.width} {bn.height}">'
           f'<path fill="currentColor" fill-rule="evenodd" d="{"".join(trazos)}"/></svg>')
    open(args.salida, "w").write(svg)
    print(args.salida, f"{len(svg) // 1024} KB")


def sinfondo(args):
    im = recortar(Image.open(args.entrada).convert("RGB"), args.recorte)
    rgb = np.asarray(im, dtype=np.float32)
    luz = rgb.mean(axis=2)
    # Alpha ramps from 0 at paper white to 255 well inside the ink, keeping antialiased edges.
    alfa = np.clip((args.blanco - luz) / (args.blanco - 150) * 255, 0, 255)
    out = np.dstack([rgb, alfa]).astype(np.uint8)
    res = Image.fromarray(out, "RGBA")
    res = res.crop(res.getbbox())
    res.save(args.salida, optimize=True)
    print(args.salida, res.size)


p = argparse.ArgumentParser()
p.add_argument("accion", choices=["vector", "sinfondo"])
p.add_argument("entrada")
p.add_argument("salida")
p.add_argument("--recorte")
p.add_argument("--modo", default="oscuro", choices=["oscuro", "color", "figura"])
p.add_argument("--umbral", type=int, default=150)
p.add_argument("--escala", type=int, default=3)
p.add_argument("--motas", type=int, default=12)
p.add_argument("--blanco", type=int, default=235)
p.add_argument("--circulo", action="append", help="cx,cy,r as fractions; repeatable")
a = p.parse_args()
vector(a) if a.accion == "vector" else sinfondo(a)
