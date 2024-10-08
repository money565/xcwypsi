<script setup lang="ts">
import mainSidebar from './components/sidebar/MainSidebar.vue'
import subSidebar from './components/sidebar/SubSidebar.vue'
import topView from './components/top/index.vue'
import { useAppConfigStore } from '@/stores/app'

const useAppConfig = useAppConfigStore()
const showTop = computed(() => {
  return ['onlyTopNav', 'topSubSideNav'].includes(useAppConfig.getLayoutMode)
})

const showSidebar = computed(() => {
  return useAppConfig.getLayoutMode !== 'onlyTopNav'
})

const showMainSidebar = computed(() => {
  return useAppConfig.getLayoutMode === 'mainSubSideNav'
})

const showSubSidebar = computed(() => {
  return useAppConfig.getLayoutMode !== 'onlyTopNav'
})

const sideBarWidth = computed(() => {
  if (!useAppConfig.getCollapse) {
    if (useAppConfig.getLayoutMode === 'mainSubSideNav') {
      return `w-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-width))]`
    }
    return `w-[var(--xt-sub-sidebar-width)]`
  }
  else {
    if (useAppConfig.getLayoutMode === 'mainSubSideNav') {
      return `w-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-collapse-width))]`
    }
    return `w-[var(--xt-sub-sidebar-collapse-width)]`
  }
})

const fixedActionbar = computed(() => {
  console.log(useAppConfig.appConfig.nav.fixed)
  if (useAppConfig.appConfig.nav.fixed) {
    return 'fixed z-1'
  }
  return ''
})

const showToolbar = computed(() => {
  return useAppConfig.appConfig.toolbar.enable
})

const showTabbar = computed(() => {
  return useAppConfig.appConfig.toolbar.enable
})

const actionbarleft = computed(() => {
  if (!showSidebar.value) {
    return 'left-0'
  }
  if (!useAppConfig.getCollapse) {
    if (useAppConfig.getLayoutMode === 'mainSubSideNav') {
      return 'left-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-width))]'
    }
    else {
      return 'left-[var(--xt-sub-sidebar-width)]'
    }
  }
  else {
    if (useAppConfig.getLayoutMode === 'mainSubSideNav') {
      return 'left-[calc(var(--xt-main-sidebar-width)+var(--xt-sub-sidebar-collapse-width))]'
    }
    else {
      return 'left-[var(--xt-sub-sidebar-collapse-width)]'
    }
  }
})

const actionbarTop = computed(() => {
  if (['onlyTopNav', 'topSubSideNav'].includes(useAppConfig.getLayoutMode)) {
    return 'top-[var(--xt-top-nav-height)]'
  }
  return 'top-0'
})

const routerViewContentMarginTop = computed(() => {
  if (!useAppConfig.appConfig.nav.fixed) {
    return 'mt-0'
  }
  if (showTabbar.value && showToolbar.value) {
    return 'mt-[calc(var(--xt-toolbar-height)+var(--xt-tabbar-height))]'
  }
  else if (showTabbar.value && !showToolbar.value) {
    return 'mt-[var(--xt-toolbar-height)]'
  }
  else if (showTabbar.value && !showToolbar.value) {
    return 'mt-[var(--xt-tabbar-height)]'
  }
  else {
    return 'mt-0'
  }
})

const routerViewContentFontSize = computed(() => {
  let fs = ''
  switch (useAppConfig.appConfig.elementSize) {
    case 'large':
      fs = 'text-base'
      break
    case 'small':
      fs = 'text-xs'
      break
    default:
      fs = 'text-sm'
      break
  }
  return fs
})
</script>

<template>
  <div class="h-full">
    <section class="flex flex-col h-full relative">
      <template v-if="showTop">
        <div class="h-20 flex-shrink-0">
          <topView />
        </div>
      </template>

      <div class="flex-1 flex overflow-hidden">
        <template v-if="showSidebar">
          <div class="h-full flex" :class="[sideBarWidth]">
            <template v-if="showMainSidebar">
              <main-sidebar />
            </template>
            <template v-if="showSubSidebar">
              <sub-sidebar />
            </template>
          </div>
        </template>

        <main class="flex-1 main-box flex flex-col" :class="useAppConfig.appConfig.nav.fixed ? '' : 'overflow-auto'">
          <div class="right-0" :class="[fixedActionbar, actionbarleft, actionbarTop]">
            <div class="h-50px bg-red">
              tabbar
            </div>
            <div class="h-50px bg-yellow">
              toolbar
            </div>
          </div>
          <section
            class="flex-1"
            :class="[routerViewContentMarginTop, routerViewContentFontSize, {
              'overflow-auto': useAppConfig.appConfig.nav.fixed,
            }]"
          >
            <RouterView />
          </section>
        </main>
      </div>
    </section>
    <el-backtop target=".main-box" :right="20" :bottom="20" />
  </div>
</template>

<style lang="scss" scoped>

</style>
