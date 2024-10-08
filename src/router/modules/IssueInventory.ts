import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/IssueInventory',
  name: 'IssueInventory',
  redirect: '/IssueInventory/IssueInventory-1',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '库存发放',
    icon: 'IssueInventory',
  },
  children: [{
    path: 'IssueInventory-1',
    name: 'IssueInventory-1',
    component: () => import('@/views/components/IssueInventory/index.vue'),
  }],

} as RouteRecordRaw
