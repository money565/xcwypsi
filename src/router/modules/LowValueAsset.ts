import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/FixedAsset',
  name: 'FixedAsset',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '固定资产',
    icon: 'FixedAsset',
  },
  children: [{
    path: '',
    name: 'WarehouseStock-1',
    component: () => import('@/views/components/WarehouseStock/index.vue'),
  }],

} as RouteRecordRaw
