import * as bootstrap from 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'

export default defineNuxtPlugin(() => {
   return {
     provide: { bootstrap }
   }
})
