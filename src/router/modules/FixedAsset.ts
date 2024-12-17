import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/LowValueAsset',
  name: 'LowValueAsset',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '低值资产',
    icon: 'LowValueAsset',
  },
  children: [{
    path: '',
    name: 'LowValueAsset-1',
    component: () => import('@/views/components/WarehouseStock/index.vue'),
  }],

} as RouteRecordRaw
