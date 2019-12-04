// // import Vue from 'vue'
// import Login from './components/Login.vue'
// import Home from './components/Home.vue'
// import About from './components/About.vue'
// // import App from './App.vue'

// export const routes = [
//   { path: '/', component: Login },
//   { path: '/home', component: Home },
//   { path: '/about', component: About }
// ]
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
