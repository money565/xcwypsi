import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/OrdersList',
  name: 'OrdersList',

  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '要货单',
    icon: 'OrdersList',
    cache: true,
  },
  children: [{
    path: '',
    name: 'OrdersList-1',
    component: () => import('@/views/components/OrdersList/index.vue'),
  }],

} as RouteRecordRaw
