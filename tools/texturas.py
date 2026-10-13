# Turn a colour texture scan into a neutral "detail" tile (mid-grey = no change) for CSS blending over any flat colour.
# Usage: texturas.py entrada.jpg salida.webp [contraste=1.0] [tamaño=768]
import sys
from PIL import Image, ImageFilter, ImageOps
import numpy as np

src, out = sys.argv[1], sys.argv[2]
contrast = float(sys.argv[3]) if len(sys.argv) > 3 else 1.0
size = int(sys.argv[4]) if len(sys.argv) > 4 else 768

im = ImageOps.grayscale(Image.open(src)).resize((size, size), Image.LANCZOS)
a = np.asarray(im, dtype=np.float32)
# Blur a wrapped copy so the high-pass leaves no seam where the tile repeats.
pad = size // 4
envuelta = Image.fromarray(np.pad(a, pad, mode="wrap").astype(np.uint8))
low = np.asarray(envuelta.filter(ImageFilter.GaussianBlur(size / 24)), dtype=np.float32)[pad:-pad, pad:-pad]
detail = (a - low) * contrast + 128  # high-pass keeps fibres and grain, drops the colour blotches
Image.fromarray(np.clip(detail, 0, 255).astype(np.uint8)).save(out, quality=72, method=6)
print(out, f"{np.std(detail):.1f}")
