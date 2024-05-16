import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/forespolicy',
      name: 'forespolicy',
      component: () => import('../views/ForesPP.vue')
    }
  ]
})

export default router
