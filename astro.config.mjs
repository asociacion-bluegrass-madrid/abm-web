import { defineConfig } from "astro/config";

// Absolute base for link previews: SITE_URL if set, else the Railway domain at build time, else localhost.
const site =
  process.env.SITE_URL ??
  (process.env.RAILWAY_PUBLIC_DOMAIN ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}` : "http://localhost:4321");

export default defineConfig({
  site,
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: { prefixDefaultLocale: false },
  },
});
