import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/select',
    name: 'Select',
    component: () => import('../pages/Select.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../pages/Result.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;