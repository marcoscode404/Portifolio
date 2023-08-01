// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // modules: ["nuxt-icon", "@pinia/nuxt", "@nuxthq/ui"],
  modules: ["@nuxthq/ui", "nuxt-icon"],
  srcDir: "src/",
  ssr: false,

  colorMode: {
    preference: 'dark'
  },

  devtools: { enabled: true },
})