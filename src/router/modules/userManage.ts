import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/userManage',
  name: 'userManage',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '用户管理',
    icon: 'userManage',
    cache: true,
  },
  children: [{
    path: '',
    name: 'userManage-1',
    componentName: 'userManage',
    component: () => import('@/views/components/userManage/index.vue'),
  }],

} as RouteRecordRaw
