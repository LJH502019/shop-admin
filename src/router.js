import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './components/index.vue'
import login from './components/login.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: index, name: 'index' },
  { path: '/login', component: login }
]

const router = new VueRouter({
  routes
})

export default router
