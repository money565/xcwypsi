import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/demo2',
  name: 'demo2',
  redirect: '/demo2/demo2-1',
  component: () => import('@/layouts/index.vue'),
  children: [{
    path: 'demo2-1',
    name: 'dome2-1',
    component: () => import('@/views/demo2/index.vue'),
  }],

} as RouteRecordRaw
