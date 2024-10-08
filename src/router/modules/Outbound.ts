import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/Outbound',
  name: 'Outbound',
  redirect: '/Outbound/Outbound-1',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '出库单',
    icon: 'Outbound',
  },
  children: [{
    path: 'Outbound-1',
    name: 'Outbound-1',
    component: () => import('@/views/components/Outbound/index.vue'),
  }],

} as RouteRecordRaw
