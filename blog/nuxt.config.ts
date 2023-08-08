// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // modules: ["nuxt-icon", "@pinia/nuxt", "@nuxthq/ui"],
  modules: ["@nuxthq/ui", "nuxt-icon", '@nuxtjs/color-mode'],
  srcDir: "src/",
  ssr: false,

  colorMode: {
    preference: 'light'
  },

  devtools: { enabled: true },
})