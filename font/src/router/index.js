import Vue from 'vue'
import VueRouter from 'vue-router'
import recruit from '@/views/recruit/index-page'

Vue.use(VueRouter)

const routes = [
  {
    path: '/recruit',
    name: 'recruit',
    component: recruit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
