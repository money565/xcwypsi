import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/WarehouseManagement',
  name: 'WarehouseManagement',
  redirect: '/WarehouseManagement/WarehouseManagement1-1',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '仓库管理',
    icon: 'WarehouseManagement',
  },
  children: [{
    path: 'WarehouseManagement1-1',
    name: 'WarehouseManagement1-1',
    component: () => import('@/views/components/WarehouseManagement/index.vue'),
  }],

} as RouteRecordRaw