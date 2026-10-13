# ABM

Web de la **Asociación de Bluegrass de Madrid (ABM)**: Astro estático, en español e inglés. Cada push a `main` se publica en Railway.

- Estructura, diseño, despliegue y herramientas: `README.md`.
- Marca (colores, tipografías, logos y licencias): `brand/README.md`.
- Cómo publicar una noticia: `contenido/noticias/README.md`.

## Dónde está cada cosa

- `contenido/noticias/`: las noticias, una carpeta por noticia. Se publican sin tocar código.
- `src/i18n/ui.ts`: los textos fijos y las rutas. Cada texto existe en español y en inglés; un cambio en uno va con su traducción.
- `src/data/events.ts`: la agenda. `public/fotos/`: la galería.

## Convenciones

- Textos de la web y documentación en español. Comentarios del código en inglés.
- Prosa directa, sin florituras. Comentarios de código: dos líneas como mucho, solo donde el código no se explica solo.
- Probar en local antes de subir (`npm run dev`; `npm run build` debe terminar sin errores), porque cada push a `main` sale a la web.
- Dependencias con versión exacta y solo si hacen falta.
- Fotos: con permiso de quien sale y sin datos de ubicación.
- El repo debe poder traspasarse a la asociación: configuración de despliegue versionada, nada atado a cuentas personales, README de despliegue al día.
