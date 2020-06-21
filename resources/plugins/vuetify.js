// src/plugins/vuetify.js

import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
// import Vue from 'vue'
// import Vuetify from 'vuetify/lib'

// Vue.use(Vuetify)

// export default new Vuetify({
//   icons: {
//     iconfont: 'mdi', // default - only for display purposes
//     iconfont: 'mdiSvg',
//     iconfont: 'fa',
//   },
// })

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

// const opts = {}

export default new Vuetify({
    icons: {
      iconfont: 'mdi', // default - only for display purposes
      iconfont: 'mdiSvg',
      iconfont: 'fa',
    },
  })