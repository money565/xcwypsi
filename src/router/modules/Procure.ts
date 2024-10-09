import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/Procure',
  name: 'Procure',
  redirect: '/Procure/Procure-1',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '计划内采购',
    icon: 'Procure',
  },
  children: [{
    path: '',
    name: 'Procure-1',
    component: () => import('@/views/components/Procure/index.vue'),
  }],

} as RouteRecordRaw
