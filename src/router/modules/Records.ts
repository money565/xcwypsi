import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/Records',
  name: 'Records',
  redirect: '/Records/Records-1',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '出入库记录',
    icon: 'Records',
  },
  children: [{
    path: 'Records-1',
    name: 'Records-1',
    component: () => import('@/views/components/Records/index.vue'),
  }],

} as RouteRecordRaw
