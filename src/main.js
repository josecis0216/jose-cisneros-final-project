import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import vuetify from './plugins/vuetify'
import { routes } from './router'

Vue.config.productionTip = false

// Vue.directive('background', {
//   bind(el, binding) {
//     el.style.backgroundImage = url('https://wallpaperaccess.com/full/96968.png')
//   }
// })

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
