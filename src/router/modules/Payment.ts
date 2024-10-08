import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/SupplierManagement',
  name: 'SupplierManagement',
  redirect: '/SupplierManagement/SupplierManagement-1',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '供应商管理',
    icon: 'SupplierManagement',
  },
  children: [{
    path: 'SupplierManagement-1',
    name: 'SupplierManagement-1',
    component: () => import('@/views/components/SupplierManagement/index.vue'),
  }],

} as RouteRecordRaw
