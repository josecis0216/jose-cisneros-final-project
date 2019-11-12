import Vue from 'vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
// import App from './App.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];



// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       component: About
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })
