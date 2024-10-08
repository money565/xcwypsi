import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/demo1',
  name: 'demo1',
  redirect: '/demo1/demo1-1',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '测试菜单1',
    icon: 'psi',
  },
  children: [{
    path: 'demo1-1',
    name: 'dome1-1',
    component: () => import('@/views/demo/index.vue'),
    meta: {
      title: '测试菜单1-1',
      icon: 'psi2',
    },
  }],

} as RouteRecordRaw
