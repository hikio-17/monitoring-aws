// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/js/all.min.js',
          integrity: 'sha384-rfP4VLjbAGx4MZzB1xUnG9R4Nz9H3IzZP8q1N1q+uMaRzQQPDp7xRdflZ9U6pGMr',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
  css: [
    'admin-lte/dist/css/adminlte.min.css',
    'admin-lte/plugins/fontawesome-free/css/all.min.css'
  ],

  plugins: [
    { src: '~/plugins/jquery.js', mode: 'client' },
    { src: '~/plugins/bootstrap.js', mode: 'client' },
    { src: '~/plugins/jquery.overlayScrollbars.min.js', mode: 'client' },
    { src: '~/plugins/adminlte.js', mode: 'client' },
   ],
  modules: ['@pinia/nuxt', '@nuxt/image']
})
