import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/switchRouter',
  name: 'switchRouter',

  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '阈值设定',
    icon: 'switch',
  },
  children: [{
    path: '',
    name: 'switchRouter-1',
    component: () => import('@/views/components/switch/index.vue'),
  }],

} as RouteRecordRaw
