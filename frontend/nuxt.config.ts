// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  // ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    ['@pinia/nuxt', {autoImports: ['defineStore']}],
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "~/styles/variables.scss";
          @import "~/styles/functions.scss";`,
          api: 'modern-compiler'
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBase: 'http://strapi:1337/api' || 'http://localhost:1337/api',
    },
  },
  components: [
    { path: '~/components', pathPrefix: false },
    { path: '~/components/buttons', pathPrefix: false },
    { path: '~/components/forms', pathPrefix: false },
    { path: '~/components/modals', pathPrefix: false },
    { path: '~/components/cards', pathPrefix: false },
  ],
  css: [
      '~/styles/global.scss'
  ]
})
