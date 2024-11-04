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
      cache: true,
    },
  }, {
    path: 'supplierList',
    name: 'supplierList',
    component: () => import('@/views/components/SupplierManagement/SupplierList/index.vue'),
    meta: {
      title: '供应商列表',
    },
  }, {
    path: 'supplierDetail',
    name: 'supplierDetail',
    component: () => import('@/views/components/SupplierManagement/SupplierList/detail.vue'),
    meta: {
      title: '供应商详情',
      hideInMenu: true,
      hideInSearch: true,
      activeMenu: '/SupplierManagement/supplierList',
    },
  }],
} as RouteRecordRaw
