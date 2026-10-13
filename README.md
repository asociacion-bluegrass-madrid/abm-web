# ABM

Web de la Asociación de Bluegrass de Madrid: Astro estático, en español e inglés. Cada push a `main` se publica en Railway.

## Desarrollo

Node 22.12 o superior (`.nvmrc`).

```sh
nvm use
npm install
npm run dev      # http://localhost:4321  (inglés en /en/)
npm run build    # salida estática en dist/
```

## Estructura

- `contenido/noticias/`: una carpeta por noticia, con su texto y sus fotos. Cómo publicar: `contenido/noticias/README.md`.
- `src/i18n/ui.ts`: textos fijos en los dos idiomas, rutas, correo de contacto y redes del pie.
- `src/data/events.ts`: la agenda. La jam del Collins es fija y no se apunta aquí.
- `src/secciones/`: una pestaña por fichero, más `Noticia.astro` (la página de cada noticia). `src/pages/` las envuelve en cada idioma.
- `src/layouts/Sitio.astro`: la carpeta común (cabecera, pestañas, hoja, pie) y el `<head>`.
- `src/components/`: pestañas, menú del móvil, interruptores, tarjeta de noticia, banjo y separador.
- `src/styles/sitio.css`: todo el CSS. El bloque final es solo para móvil.
- `public/`: texturas, ilustraciones, fotos de la galería, iconos y la tarjeta para enlaces (`og.jpg`).
- `brand/`: logos, tipografías y colores de la asociación (`brand/README.md`).
- `tools/`: herramientas de imagen.

## Diseño

- **Carpeta de piel con una hoja de papel dentro.** Modo claro (kraft, por defecto) y oscuro (tabaco). La página declara `color-scheme: only light` y `darkreader-lock` para que los modos noche de los navegadores no repinten los colores.
- **Tipografías:** Chulapa Bold en títulos y pestañas, Libre Franklin en el texto y Libre Caslon solo en cursiva.
- **Navegación:** pestañas en escritorio. En 900 px o menos, un menú lateral.
- **Noticias:** Inicio enseña las tres últimas; la pestaña Noticias, todas, de tres en tres. Cada noticia tiene su página.
- **Galería:** las fotos se abren en un visor sobre la página.

## Despliegue

Railway compila la web con Railpack y la sirve con Caddy usando el `Caddyfile` de la raíz, que añade cabeceras de caché: las páginas se comprueban en cada visita y los ficheros de `/_astro/` se guardan para siempre.

- `SITE_URL` (opcional): URL pública para Open Graph y `canonical`. Si falta, se usa `RAILWAY_PUBLIC_DOMAIN`.
- `PUBLIC_INDEXAR=1`: quita el `noindex`. Se activa al lanzar.

## Herramientas de imagen (`tools/`)

Python 3 con `pip install -r tools/requirements.txt`.

- `texturas.py`: convierte un escaneo de papel o piel en una textura neutra y sin cortes, que se tiñe con CSS.
- `ilustrar.py vector`: pasa un grabado de dominio público a un SVG de una sola tinta.
- `ilustrar.py sinfondo`: quita el fondo blanco de un logo o escaneo.
- `tarjeta-og.html`: fuente de `public/og.jpg` (1200×630).

## Materiales y licencias

- Texturas: ambientCG (CC0). Oso y rosa de los vientos: plano de Pedro Texeira (1656), dominio público.
- Iconos de redes: Simple Icons (CC0). Fotos: cedidas por la asociación.
- Tipografías: `brand/README.md`. Créditos públicos: `public/creditos.txt`.
