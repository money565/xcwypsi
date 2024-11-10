import type { RouteRecordRaw } from 'vue-router'

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
    meta: {
      isWhite: true,
    },
  },
  {
    path: '/',
    name: 'root',
    component: () => import('@/layouts/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'home',
        },
      },
      {
        path: 'personal',
        name: 'personal',
        component: () => import('../views/personal/index.vue'),
      },
      {
        path: 'reload',
        name: 'reload',
        component: () => import('@/views/reload.vue'),
      },
    ],
  },
]

export default constantRoutes
