import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/Records',
  name: 'Records',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '出入库记录',
    icon: 'Records',
  },
  children: [{
    path: '',
    name: 'Records-1',
    component: () => import('@/views/components/Records/index.vue'),
  }],

} as RouteRecordRaw
