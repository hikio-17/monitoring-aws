import * as jquery from 'admin-lte/plugins/jquery/jquery.min.js'

export default defineNuxtPlugin(() => {
   return {
     provide: { jquery }
   }
})
