// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from "url";

export default defineNuxtConfig({
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  eslint: {
    failOnError: true,
  },
  imports: {
    autoImport: false,
  },
  alias: {
    app: fileURLToPath(new URL("./src/app", import.meta.url)),
    entities: fileURLToPath(new URL("./src/entities", import.meta.url)),
    pages: fileURLToPath(new URL("./src/pages", import.meta.url)),
    widgets: fileURLToPath(new URL("./src/widgets", import.meta.url)),
    features: fileURLToPath(new URL("./src/features", import.meta.url)),
    shared: fileURLToPath(new URL("./src/shared", import.meta.url)),
  },
  plugins: [],
  components: true,
  modules: [
    // '@pinia/nuxt',
    // '@vueuse/nuxt',
    // '@nuxtjs/eslint-module',
    "nuxt-primevue",
    "nuxt-svgo",
  ],
  svgo: {
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              // customize default plugin options
              inlineStyles: {
                onlyMatchedOnce: false,
              },

              // or disable plugins
              removeDoctype: false,
              removeViewBox: false,
            },
          },
        },
      ],
    },
  },
  css: ["primevue/resources/themes/aura-light-green/theme.css"],

  build: {},
});
