/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/modules/login/ui/views/LoginView.vue'
import SigninView from '@/modules/login/ui/views/SigninView.vue'

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
      path: '/signin',
      component: SigninView,
    },
  ],
})

export default router
