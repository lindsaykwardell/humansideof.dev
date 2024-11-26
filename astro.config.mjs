import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import netlify from "@astrojs/netlify";

import react from "@astrojs/react";

import simpleStackQuery from "simple-stack-query";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), simpleStackQuery()],
  output: "server",
  adapter: netlify(),
});