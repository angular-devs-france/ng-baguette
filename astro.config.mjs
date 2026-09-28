import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  // Rendered on each request so date-based phases (CFP, ticketing…) switch without a redeploy
  output: "server",
  adapter: netlify(),
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
