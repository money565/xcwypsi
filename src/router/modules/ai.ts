import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/ai',
  name: 'ai',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: 'ai智能',
    icon: 'ai',
    auth: ['demo'],
  },
  children: [{
    path: '',
    name: 'ai-1',
    component: () => import('@/views/components/ai/index.vue'),
  }],

} as RouteRecordRaw
