/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/modules/login/ui/views/LoginView.vue'
import HomeView from '@/modules/home/ui/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LoginView,
    },
    {
      path: '/login',
      component: LoginView,
    },
    {
      path: '/home',
      component: HomeView,
    },
  ],
})

export default router
