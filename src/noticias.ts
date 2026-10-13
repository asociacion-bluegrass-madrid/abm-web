// Joins each post's es.md and en.md into one item per language, newest first.
// English falls back to the Spanish text when a post has no en.md.
import { getImage } from "astro:assets";
import { getCollection, type CollectionEntry } from "astro:content";
import { rutas, type Lang } from "./i18n/ui";

export interface Noticia {
  slug: string;
  fecha: Date;
  entrada: CollectionEntry<"noticias">;
  datos: CollectionEntry<"noticias">["data"];
  enEspanol: boolean; // shown in Spanish on the English site
}

const CARPETA = /^(\d{4}-\d{2}-\d{2})-([a-z0-9-]+)$/;

export async function noticias(lang: Lang): Promise<Noticia[]> {
  const porCarpeta = new Map<string, Partial<Record<Lang, CollectionEntry<"noticias">>>>();
  for (const entrada of await getCollection("noticias")) {
    const [carpeta, idioma] = entrada.id.split("/");
    porCarpeta.set(carpeta, { ...porCarpeta.get(carpeta), [idioma]: entrada });
  }

  const lista: Noticia[] = [];
  for (const [carpeta, { es, en }] of porCarpeta) {
    const partes = carpeta.match(CARPETA);
    if (!partes) throw new Error(`contenido/noticias/${carpeta}: the folder name must be YYYY-MM-DD-slug`);
    if (!es) throw new Error(`contenido/noticias/${carpeta}: missing es.md`);
    const entrada = lang === "en" && en ? en : es;
    lista.push({
      slug: partes[2],
      fecha: new Date(`${partes[1]}T12:00:00Z`),
      entrada,
      // Photo comes from es.md unless en.md sets its own.
      datos: { ...entrada.data, foto: entrada.data.foto ?? es.data.foto },
      enEspanol: lang === "en" && !en,
    });
  }
  return lista.sort((a, b) => b.fecha.getTime() - a.fecha.getTime());
}

export interface Pagina {
  titulo: string;
  descripcion: string;
  imagen?: { src: string; ancho: number; alto: number };
  rutas: Record<Lang, string>;
}

// Title, summary, share image and both language URLs for a post's own page.
export async function paginaNoticia(noticia: Noticia): Promise<Pagina> {
  const foto = noticia.datos.foto;
  const imagen = foto ? await getImage({ src: foto, width: 1200, format: "jpg" }) : undefined;
  return {
    titulo: noticia.datos.titulo,
    descripcion: noticia.datos.resumen,
    imagen: imagen && { src: imagen.src, ancho: Number(imagen.attributes.width), alto: Number(imagen.attributes.height) },
    rutas: { es: `${rutas.noticias.es}${noticia.slug}/`, en: `${rutas.noticias.en}${noticia.slug}/` },
  };
}
