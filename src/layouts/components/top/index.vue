<script setup lang="ts">
import SidebarItem from '../sidebar/SidebarItem.vue'
import Logo from '../logo/index.vue'
import { useAppConfigStore } from '@/stores/app'

const useAppConfig = useAppConfigStore()

const topnavcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav') {
    return useAppConfig.getTheme.mainMenuBgColor
  }
  else if (useAppConfig.getLayoutMode === 'onlyTopNav') {
    return useAppConfig.getTheme.menuBgColor
  }
  return '#D3D3D3'
})

const darktopnavcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav') {
    return 'var(--xt-sub-sidebar-bg-color)'
  }
  else if (useAppConfig.getLayoutMode === 'onlyTopNav') {
    return 'var(--xt-sub-sidebar-bg-color)'
  }
  return '#D3D3D3'
})

const menus = [{
  path: '/demo100',
  meta: {
    icon: 'psi',
    title: '查看预算执行',
  },
}, {
  path: '/demo101',
  meta: {
    icon: 'psi2',
    title: '用户设置',
  },
}, {
  path: '/demo102',
  meta: {
    icon: 'psi3',
    title: '选项',
  },
}]
</script>

<template>
  <div class="flex h-[var(--xt-top-nav-height)] flex-shrink-0 top-nav-container px-4 items-center">
    <Logo class="mr-4 text-5" />
    <el-menu
      mode="horizontal"
      :collapse="useAppConfig.getCollapse"
      :collapse-transition="false"
      class="flex-1"
    >
      <template v-for="item in menus" :key="item.path">
        <SidebarItem :menu="item" />
      </template>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.top-nav-container{
    background: v-bind(topnavcolor);

    :deep(.el-menu){
        background: v-bind(topnavcolor);
        border-bottom: none;
    }
}

.dark{
    .top-nav-container{
    background: v-bind(darktopnavcolor);

    :deep(.el-menu){
        background: v-bind(darktopnavcolor);
        border-bottom: none;
    }
}
}
</style>
