import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/SystemSetting',
  name: 'SystemSetting',
  component: () => import('@/layouts/index.vue'),
  meta: {
    title: '系统设置',
    icon: 'systemSetting',
  },
  children: [{
    path: '',
    name: 'SystemSetting-1',
    component: () => import('@/layouts/components/tools/Setting/SettingDrawer/index.vue'),
  }],

} as RouteRecordRaw
