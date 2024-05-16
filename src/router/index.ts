import { createRouter, createWebHistory } from 'vue-router'
import ForesPP from '../views/ForesPP.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/forespolicy',
      name: 'forespolicy',
      component: ForesPP
    }
  ]
})

export default router
