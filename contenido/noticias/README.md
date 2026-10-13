# Noticias

Cada noticia es una carpeta aquí dentro. La web las ordena por fecha, de la más nueva a la más antigua: las tres últimas salen en Inicio («Últimas noticias») y todas en la pestaña Noticias, de tres en tres.

## Publicar una noticia

1. **Crea una carpeta** con la fecha y un nombre corto, en minúsculas, sin tildes y con guiones: `2026-11-02-concierto-en-el-retiro`.
   - La fecha ordena el tablón y sale debajo del título.
   - El nombre sin la fecha es la dirección de la noticia: `/noticias/concierto-en-el-retiro/` (y `/en/news/concierto-en-el-retiro/` en inglés).
2. **Escribe `es.md`** dentro de la carpeta, con esta forma:

   ```md
   ---
   titulo: Concierto en el Retiro
   resumen: Una o dos frases para la tarjeta del tablón.
   foto: ./foto.jpg
   pieFoto: Quién sale y dónde
   ---

   El texto de la noticia, en párrafos separados por una línea en blanco.
   ```

3. **La foto**, si hay, va en la misma carpeta tal como sale del móvil (JPG o PNG). Su nombre se pone en `foto:`. La web la reduce y la optimiza sola al publicar.
4. **El inglés es opcional:** un `en.md` con los mismos campos traducidos (la foto se toma del español). Si no hay `en.md`, la web en inglés enseña la noticia en español con un aviso.
5. **Pruébalo en local** (`npm run dev` y abre http://localhost:4321/noticias/) y súbelo a `main`: se publica solo en unos minutos.

## Campos

| Campo | Obligatorio | Qué es |
|---|---|---|
| `titulo` | sí | El título de la noticia. |
| `resumen` | sí | Una o dos frases. Es el texto de la tarjeta en el tablón y la descripción al compartir el enlace. |
| `foto` | no | La foto principal: `./nombre.jpg`, en la misma carpeta. |
| `pieFoto` | no | El texto debajo de la foto. |

## Dentro del texto

- Párrafos: separados por una línea en blanco.
- Enlaces: `[texto](https://...)`. A otra página de la web: `[agenda](/agenda/)`; en `en.md`, a la página en inglés: `[events](/en/events/)`.
- Más fotos: déjalas en la carpeta y escribe `![Qué se ve](./otra.jpg)` donde vayan.
- **Negrita** con `**así**`, *cursiva* con `*así*` y listas empezando las líneas con `- `.

## Antes de subir fotos

- Que quien sale en la foto esté de acuerdo.
- Mejor sin la ubicación: muchos móviles la guardan dentro de la foto. La web publica solo versiones reducidas sin esos datos, pero el original queda en el repo.
