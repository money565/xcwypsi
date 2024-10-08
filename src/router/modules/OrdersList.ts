import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/OrdersList',
  name: 'OrdersList',
  redirect: '/OrdersList/OrdersList-1',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '要货单',
    icon: 'OrdersList',
  },
  children: [{
    path: 'OrdersList-1',
    name: 'OrdersList-1',
    component: () => import('@/views/components/OrdersList/index.vue'),
  }],

} as RouteRecordRaw
