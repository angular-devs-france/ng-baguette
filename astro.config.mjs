import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr",
    prefixDefaultLocale: true,
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [tailwind()],
});
