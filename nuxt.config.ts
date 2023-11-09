// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'admin-lte/dist/css/adminlte.min.css',
  ],

  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' },
  ],
  modules: ['@pinia/nuxt', '@nuxt/image']
})
