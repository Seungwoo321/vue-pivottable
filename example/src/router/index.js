import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/vue-pivottable',
    name: 'VuePivottable',
    component: () => import('@/views/VuePivottable.vue')
  },
  {
    path: '/vue-pivottable-ui',
    name: 'VuePivottableUi',
    component: () => import('@/views/VuePivottableUi.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
