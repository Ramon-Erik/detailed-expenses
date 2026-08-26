/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/modules/login/ui/views/LoginView.vue'
import HomeView from '@/modules/home/ui/views/HomeView.vue'

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
      meta: {
        noAuth: true,
      },
    },
    {
      path: '/home',
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
  ],
})

interface Rules {
  requiresAuth?: boolean
  noAuth?: boolean
}

router.beforeEach((to, from) => {
  const isLogged = !!sessionStorage.getItem('access_token')
  const rules = to.meta as Rules

  if (isLogged && rules.noAuth) {
    return '/home'
  }

  if (!isLogged && rules.requiresAuth) {
    return '/login'
  }

  return true
})

export default router
