import type { RouteRecordRaw } from 'vue-router'
import components from './modules/components'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: () => import('../views/notFound.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
  },
  {
    path: '/',
    name: 'root',
    component: () => import('@/layouts/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
      },
      components,
    ],
  },
]

export default constantRoutes
