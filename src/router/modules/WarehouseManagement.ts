import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/WarehouseManagement',
  name: 'WarehouseManagement',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '仓库管理',
    icon: 'WarehouseManagement',
  },
  children: [{
    path: '',
    name: 'WarehouseManagement1-1',
    component: () => import('@/views/components/WarehouseManagement/index.vue'),
  }],

} as RouteRecordRaw
