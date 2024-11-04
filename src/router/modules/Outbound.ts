import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/Outbound',
  name: 'Outbound',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '出库单',
    icon: 'Outbound',
    cache: true,
  },
  children: [{
    path: '',
    name: 'Outbound-1',
    component: () => import('@/views/components/Outbound/index.vue'),
  }],

} as RouteRecordRaw
