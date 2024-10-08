<script setup lang="ts">
import SidebarItem from '../sidebar/SidebarItem.vue'
import Logo from '../logo/index.vue'
import { useAppConfigStore } from '@/stores/app'
import useMenus from '@/hooks/useMenus'

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

const topnavtextcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav') {
    return useAppConfig.getTheme.mainMenuTextColor
  }
  else if (useAppConfig.getLayoutMode === 'onlyTopNav') {
    return useAppConfig.getTheme.menuTextColor
  }
  return '#D3D3D3'
})

const topnavhoverbgcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav') {
    return useAppConfig.getTheme.mainMenuHoverBgColor
  }
  else if (useAppConfig.getLayoutMode === 'onlyTopNav') {
    return useAppConfig.getTheme.menuTextColor
  }
  return '#D3D3D3'
})

const topnavhovertextcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav') {
    return useAppConfig.getTheme.mainMenuHoverTextColor
  }
  else if (useAppConfig.getLayoutMode === 'onlyTopNav') {
    return useAppConfig.getTheme.menuTextColor
  }
  return '#D3D3D3'
})

const topnavactivebgcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav') {
    return useAppConfig.getTheme.mainMenuActiveBgColor
  }
  else if (useAppConfig.getLayoutMode === 'onlyTopNav') {
    return useAppConfig.getTheme.menuTextColor
  }
  return '#D3D3D3'
})

const topnavactivetextcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav') {
    return useAppConfig.getTheme.mainMenuActiveTextColor
  }
  else if (useAppConfig.getLayoutMode === 'onlyTopNav') {
    return useAppConfig.getTheme.menuTextColor
  }
  return '#D3D3D3'
})

const darktopnavcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav') {
    return 'var(--xt-sub-menu-bg-color)'
  }
  else if (useAppConfig.getLayoutMode === 'onlyTopNav') {
    return 'var(--xt-sub-menu-bg-color)'
  }
  return '#D3D3D3'
})

const darktopnavtextcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav') {
    return 'var(--xt-main-menu-text-color)'
  }
  else if (useAppConfig.getLayoutMode === 'onlyTopNav') {
    return 'var(--xt-main-menu-text-color)'
  }
  return '#D3D3D3'
})

const darktopnavhoverbgcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav') {
    return 'var(--xt-main-menu-hover-bg-color)'
  }
  else if (useAppConfig.getLayoutMode === 'onlyTopNav') {
    return 'var(--xt-main-menu-hover-bg-color)'
  }
  return '#D3D3D3'
})

const darktopnavhovertextcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav') {
    return 'var(--xt-main-menu-hover-text-color)'
  }
  else if (useAppConfig.getLayoutMode === 'onlyTopNav') {
    return 'var(--xt-main-menu-hover-text-color)'
  }
  return '#D3D3D3'
})

const darktopnavactivebgcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav') {
    return 'var( --xt-main-menu-active-bg-color)'
  }
  else if (useAppConfig.getLayoutMode === 'onlyTopNav') {
    return 'var( --xt-main-menu-active-bg-color)'
  }
  return '#D3D3D3'
})

const darktopnavactivetextcolor = computed(() => {
  if (useAppConfig.getLayoutMode === 'topSubSideNav') {
    return 'var(--xt-main-menu-active-text-color)'
  }
  else if (useAppConfig.getLayoutMode === 'onlyTopNav') {
    return 'var(--xt-main-menu-active-text-color)'
  }
  return '#D3D3D3'
})

const { menus } = useMenus()!

const allMainMenu = [{
  title: '演示1',
  icon: 'demo',
  parentIndex: 0,
  children: [{}],
}, {
  title: '演示2',
  icon: 'demo2',
  parentIndex: 1,
  children: [{}],
}]
</script>

<template>
  <div class="flex h-[var(--xt-top-nav-height)] flex-shrink-0 top-nav-container px-4 items-center">
    <Logo class="mr-4 text-5" />
    <!-- 顶部主导航+侧边次导航 -->
    <template v-if="useAppConfig.getLayoutMode === 'topSubSideNav'">
      <el-menu
        mode="horizontal"
        :unique-opened="true"
        class="flex-1 main-menu"
      >
        <template v-for="(item, index) in allMainMenu" :key="index">
          <el-menu-item v-if="item.children.length" :index="String(item.parentIndex)">
            <el-icon v-if="item.icon" :size="20">
              <svg-icon :name="item.icon" />
            </el-icon>
            <span class="truncate">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </template>
    <!-- 只有顶部导航 -->
    <template v-if="useAppConfig.getLayoutMode === 'onlyTopNav'">
      <el-menu
        mode="horizontal"
        router
        :default-active="String($route.meta?.activeMenu) || $route.path"
        :unique-opened="true"
        class="flex-1 overflow-x-auto"
      >
        <template v-for="item in menus" :key="item.path">
          <SidebarItem :menu="item" />
        </template>
      </el-menu>
    </template>
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

.main-menu{
    .el-menu-item {
        border-radius: 8px;
        background: transparent !important;
        color: v-bind(topnavtextcolor) !important;
        transition-duration: 0.3s !important;

        &:hover {
            background: v-bind(topnavhoverbgcolor) !important;
            color: v-bind(topnavhovertextcolor) !important;
            border-bottom: 2px solid v-bind(topnavhovertextcolor)!important;
        }

        &.is-active {
            background: v-bind(topnavactivebgcolor) !important;
            color: v-bind(topnavactivetextcolor) !important;
            border-bottom: 2px solid v-bind(topnavactivetextcolor)!important;
        }
    }
}

.dark{
    .top-nav-container{
        background: v-bind(darktopnavcolor);
        :deep(.el-menu){
            background: v-bind(darktopnavcolor);
            border-bottom: none;
        }
        .main-menu{
            .el-menu-item {
                border-radius: 8px;
                background: transparent !important;
                color: v-bind(darktopnavtextcolor) !important;
                transition-duration: 0.3s !important;

                &:hover {
                    background: v-bind(darktopnavhoverbgcolor) !important;
                    color: v-bind(darktopnavhovertextcolor) !important;
                    border-bottom: 2px solid v-bind(darktopnavhovertextcolor)!important;
                }

                &.is-active {
                    background: v-bind(darktopnavactivebgcolor) !important;
                    color: v-bind(darktopnavactivetextcolor) !important;
                    border-bottom: 2px solid v-bind(darktopnavactivetextcolor)!important;
                }
            }
        }
    }
}
</style>
