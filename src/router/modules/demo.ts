import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'demo',
  name: 'dome',
  component: () => import('@/views/demo/index.vue'),
} as RouteRecordRaw
