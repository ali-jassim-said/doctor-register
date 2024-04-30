import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/regOne.vue')
  },
  {
    path: '/regTow',
    name: 'regTow',
    component: () => import('../views/regTow.vue')
  },
  {
    path: '/successReg',
    name: 'successReg',
    component: () => import('../views/successReg.vue')
  },
  {
    path: '/regMobile',
    name: 'regMobile',
    component: () => import('../views/regMobile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
