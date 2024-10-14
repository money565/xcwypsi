import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/MaterialManagement',
  name: 'MaterialManagement',
  redirect: '/MaterialManagement/MaterialManagement-1',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '物料类型管理',
    icon: 'MaterialManagement',
  },
  children: [{
    path: '',
    name: 'MaterialManagement-1',
    meta: {
      title: '新增物料',
      icon: 'MaterialManagement',
    },
    component: () => import('@/views/components/MaterialManagement/index.vue'),
  }],

} as RouteRecordRaw
