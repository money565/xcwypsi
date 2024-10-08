import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/MaterialManagement',
  name: 'MaterialManagement',
  redirect: '/MaterialManagement/MaterialManagement-1',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '供应商管理',
    icon: 'MaterialManagement',
  },
  children: [{
    path: 'MaterialManagement-1',
    name: 'MaterialManagement-1',
    component: () => import('@/views/components/MaterialManagement/index.vue'),
  }],

} as RouteRecordRaw
