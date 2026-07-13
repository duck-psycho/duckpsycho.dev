import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://duckpsycho.dev",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "en"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap(), mdx(), pagefind()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
