import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import veeValidate from './plugins/vee-validate'

Vue.config.productionTip = false

// Vue.directive('background', {
//   bind(el, binding) {
//     el.style.backgroundImage = url('https://wallpaperaccess.com/full/96968.png')
//   }
// })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
