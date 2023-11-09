import * as adminlte from 'admin-lte/dist/js/adminlte.min.js'


export default defineNuxtPlugin(() => {
   return {
     provide: { adminlte }
   }
})
