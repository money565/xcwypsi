import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/Payment',
  name: 'Payment',
  redirect: '/Payment/Payment-1',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '支付管理',
    icon: 'Payment',
  },
  children: [{
    path: '',
    name: 'Payment-1',
    component: () => import('@/views/components/Payment/index.vue'),
  }],

} as RouteRecordRaw
