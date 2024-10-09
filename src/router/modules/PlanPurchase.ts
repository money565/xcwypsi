import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/PlanPurchase',
  name: 'PlanPurchase',
  redirect: '/PlanPurchase/PlanPurchase-1',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '日常采购',
    icon: 'PlanPurchase',
  },
  children: [{
    path: '',
    name: 'PlanPurchase-1',
    component: () => import('@/views/components/PlanPurchase/index.vue'),
  }],

} as RouteRecordRaw
