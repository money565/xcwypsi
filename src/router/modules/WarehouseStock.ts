import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/WarehouseStock',
  name: 'WarehouseStock',
  redirect: '/WarehouseStock/WarehouseStock-1',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '当前库存',
    icon: 'WarehouseStock',
  },
  children: [{
    path: 'WarehouseStock-1',
    name: 'WarehouseStock-1',
    component: () => import('@/views/components/WarehouseStock/index.vue'),
  }],

} as RouteRecordRaw
