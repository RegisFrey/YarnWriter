import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  /*
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" * / '../views/About.vue')
  }
  */
]

const router = new VueRouter({
  routes,
  mode: 'hash' // process.env.IS_ELECTRON ? 'hash' : 'history',
  /* https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/commonIssues.html#blank-screen-on-builds-but-works-fine-on-serve */
})

export default router
