import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Favorito from '../views/Favorito.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: Favorito
  },
]

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior () {
    return { 
      x: 0, 
      y: 0,
      behavior: 'smooth' 
    }
  }
})

export default router
