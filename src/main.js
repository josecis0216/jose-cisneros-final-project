// import Vue from 'vue'
// import App from './App.vue'
// import VueRouter from 'vue-router'
// import store from './store'
// import vuetify from './plugins/vuetify'
// import { routes } from './router'
import VueResource from 'vue-resource'

// Vue.use(VueResource)

// Vue.config.productionTip = false

// Vue.use(VueRouter)

// const router = new VueRouter({
//   routes,
//   mode: 'history'
// })

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')
import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
