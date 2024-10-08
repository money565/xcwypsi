import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/echartsRouter',
  name: 'echartsRouter',
  redirect: '/echartsRouter/echartsRouter-1',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '数据图表',
    icon: 'echarts',
  },
  children: [{
    path: 'echartsRouter-1',
    name: 'echartsRouter-1',
    component: () => import('@/views/components/echarts/index.vue'),
  }],

} as RouteRecordRaw
