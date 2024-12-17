import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/ReuseMaterial',
  name: 'ReuseMaterial',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '再利用物料',
    icon: 'ReuseMaterial',
  },
  children: [{
    path: '',
    name: 'ReuseMaterial-1',
    component: () => import('@/views/components/WarehouseStock/index.vue'),
  }],

} as RouteRecordRaw
