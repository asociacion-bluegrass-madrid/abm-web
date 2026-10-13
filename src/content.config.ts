// News posts: one folder per post in contenido/noticias/, named YYYY-MM-DD-slug, with es.md (required),
// en.md (optional) and its photos. How to write one: contenido/noticias/README.md.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const noticias = defineCollection({
  loader: glob({ pattern: "[0-9]*/{es,en}.md", base: "./contenido/noticias" }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      resumen: z.string(),
      foto: image().optional(),
      pieFoto: z.string().optional(),
    }),
});

export const collections = { noticias };
