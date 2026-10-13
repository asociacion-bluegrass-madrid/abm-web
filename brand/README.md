# Marca ABM

Activos de identidad para la web. Fuente original: Drive de marca de la asociación (carpeta «Logos e imagen», compartida el 2026-10-10). Esta carpeta guarda solo lo que la web necesita. Los originales completos (AI, EPS, PSD, TIF, CMYK) están en el Drive.

## Colores

| Uso | Pantone | Web |
|---|---|---|
| Azul principal | Reflex Blue C | `#001689` |
| Turquesa | 3265 C | `#00C4B3` |
| Degradado del logo | — | vertical, `#001689` arriba → `#00C4B3` abajo |

Los dos valores web coinciden con los `stop-color` del SVG oficial (`logos/logo-abm-rgb-gradient.svg`).

Son los colores corporativos. La web usa una paleta cálida propia (tinta, kraft, tabaco, caoba, madroño), definida al principio de `src/styles/sitio.css`.

## Tipografías

- **Chulapa** (Light, Regular, Bold): la tipografía del Ayuntamiento de Madrid, que es la del texto del logo. Licencia **CC BY 4.0** según los metadatos de la fuente. Se puede usar en la web y redistribuir con atribución. La web sirve el archivo sin modificar, que lleva la autoría y la licencia en sus metadatos, y repite el crédito en `public/creditos.txt`. Ficheros en `fonts/chulapa/`.
- **ITC Franklin Gothic Std**: comercial, de Adobe/ITC. La licencia de escritorio no cubre incrustarla en una web, así que no se versiona aquí. En la web se sustituye por **Libre Franklin** (licencia OFL), una reinterpretación libre de Franklin Gothic.
- **Libre Caslon Text** cursiva (OFL): acentos de la web (subtítulos, pies de foto). Libre Franklin y Libre Caslon llegan como paquetes de Fontsource.

## Logos

- `logos/web/abm-ink.svg` y `abm-cream.svg`: los logos que usa la web, en tinta marrón (modo claro) y en crema (modo oscuro). Son la versión en blanco y negro recoloreada a una sola tinta, con los detalles del mástil en el color del fondo. `abm-cream.svg` es también la base del favicon y de la tarjeta para enlaces.
- `logos/web/abm-color.svg` y `abm-white.svg`: el logo a color y el invertido en blanco, recortados al contenido (los originales vienen en un lienzo A4 con mucho margen). La web actual no los usa; quedan para otros soportes.

- `logos/logo-abm-rgb-gradient.svg` / `.png`: el logo principal a color, con degradado.
- `logos/logo-abm-bn.svg`, `logo-abm-bn-invert.svg` y `logo-abm-bn-gradient.svg`: versiones en blanco y negro, invertida y con degradado en grises.
- `jams/americana-music-jam-madrid.png`: la jam del Collins («Collins Tavern, C/ Sagasta 26, todos los domingos a las 20:30h»). `-trim.png`: el mismo logo sin márgenes. Es la fuente de `public/ilustraciones/americana-music-jam-madrid.webp`, sin fondo, hecha con `tools/ilustrar.py sinfondo`.
- `jams/slow-jam-madrid.png`: la slow jam, de la ABM, que lleva Nat. El texto del logo («Plaza de Palomita… 19:00h») está desfasado: el lugar cambia (últimamente, el Retiro). No usar la versión con el texto como dato de horario. `jams/slow-jam-madrid-mark.png` es el mismo logo recortado sin ese texto, y la fuente de `public/ilustraciones/slow-jam-madrid.webp`.

Las jams tienen identidad propia: granate y azul marino, estilo vintage. Es distinta de la de la ABM.
