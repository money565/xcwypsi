import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/echartsRouter',
  name: 'echartsRouter',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '数据图表',
    icon: 'echarts',
  },
  children: [{
    path: '',
    name: 'echartsRouter-1',
    component: () => import('@/views/components/echarts/index.vue'),
  }],

} as RouteRecordRaw
