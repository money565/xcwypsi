import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/WarehouseStock',
  name: 'WarehouseStock',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '当前库存',
    icon: 'WarehouseStock',
  },
  children: [{
    path: '',
    name: 'WarehouseStock-1',
    component: () => import('@/views/components/WarehouseStock/index.vue'),
  }],

} as RouteRecordRaw
