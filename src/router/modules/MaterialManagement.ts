import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/MaterialManagement',
  name: 'MaterialManagement',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '物料类型管理',
    icon: 'MaterialManagement',
  },
  children: [{
    path: '',
    name: 'creatMaterial',
    meta: {
      title: '新增物料',
      icon: 'MaterialManagement',
    },
    component: () => import('@/views/components/MaterialManagement/index.vue'),
  }],

} as RouteRecordRaw
