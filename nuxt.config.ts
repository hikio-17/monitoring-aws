// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/js/adminlte.min.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/css/adminlte.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
        },
      ],
    },
  },
  // css: [
  //   'admin-lte/dist/css/adminlte.min.css',
  //   'admin-lte/plugins/fontawesome-free/css/all.min.css'
  // ],

  plugins: [
    // { src: '~/plugins/jquery.js', mode: 'client' },
    { src: "~/plugins/bootstrap.js", mode: "client" },
    // { src: '~/plugins/jquery.overlayScrollbars.min.js', mode: 'client' },
    // { src: '~/plugins/adminlte.js', mode: 'client' },
  ],
  modules: ["@pinia/nuxt", "@nuxt/image"],
});
