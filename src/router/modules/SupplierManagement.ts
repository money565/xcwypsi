import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/SupplierManagement',
  name: 'SupplierManagement',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '供应商管理',
    icon: 'SupplierManagement',
  },
  children: [{
    path: 'createSupplier',
    name: 'createSupplier',
    component: () => import('@/views/components/SupplierManagement/CreateSupplier/index.vue'),
    meta: {
      title: '新增供应商',
    },
  }, {
    path: 'supplierList',
    name: 'supplierList',
    component: () => import('@/views/components/SupplierManagement/SupplierList/index.vue'),
    meta: {
      title: '供应商列表',
    },
  }],
} as RouteRecordRaw
