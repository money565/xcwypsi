import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/Audit',
  name: 'Audit',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '审核',
    icon: 'Audit',
  },
  children: [{
    path: '',
    name: 'Audit-1',
    component: () => import('@/views/components/Audit/index.vue'),
  }],

} as RouteRecordRaw
