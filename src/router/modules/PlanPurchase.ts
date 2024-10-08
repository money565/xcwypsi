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
    path: 'PlanPurchase-1',
    name: 'PlanPurchase-1',
    component: () => import('@/views/components/PlanPurchase/index.vue'),
  }],

} as RouteRecordRaw
