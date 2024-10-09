<script setup lang="ts" name="mainSidebar">
import type { RouteRecordRaw } from 'vue-router'
import logo from '../logo/index.vue'
import { useAppConfigStore } from '@/stores/app'
import useMenus from '@/hooks/useMenus'
import { usePermissionStore } from '@/stores/permission'
import { isEmpty } from '@/utils'

const useAppConfig = useAppConfigStore()
const mainmenubgcolor = computed(() => useAppConfig.getTheme.mainMenuBgColor)
const mainmenutextcolor = computed(() => useAppConfig.getTheme.mainMenuTextColor)
const mainmenuhoverbgcolor = computed(() => useAppConfig.getTheme.mainMenuHoverBgColor)
const mainmenuhovertextcolor = computed(() => useAppConfig.getTheme.mainMenuHoverTextColor)
const mainmenuactivebgcolor = computed(() => useAppConfig.getTheme.mainMenuActiveBgColor)
const mainmenuactivetextcolor = computed(() => useAppConfig.getTheme.mainMenuActiveTextColor)

const usePermission = usePermissionStore()
const { allMainMenu, allSubMenu } = useMenus()

function findCurItemPath(path: string, allSubMenu: RouteRecordRaw[]): RouteRecordRaw | undefined {
  if (isEmpty(allSubMenu))
    return undefined
  for (const item of allSubMenu!) {
    if (item.path === path) {
      return item
    }

    if (!isEmpty(item.children)) {
      const res = findCurItemPath(path, item.children!)
      if (res)
        return res
    }
  }
}

function clickMainMenu(parentIndex: number) {
  usePermission.changeMainMenu(parentIndex)
}
const route = useRoute()
watch(() => route, (n) => {
  const { path } = n
  usePermission.changeMainMenu(findCurItemPath(path, allSubMenu)?.parentIndex ?? 0)
  console.log(path, usePermission.mainMenuActive)
}, {
  immediate: true,
  deep: true,
})
</script>

<template>
  <div class="w-[var(--xt-main-sidebar-width)] flex flex-col flex-shrink-0 main-sidebar-container">
    <logo :show-logo-text="false" />
    <div class="flex-1 py-1 main-sidebar-menu-container">
      <ul>
        <template v-for="(item, index) in allMainMenu" :key="index">
          <li
            v-if="item.children.length"
            class="rounded-lg cursor-pointer flex flex-col h-[var(--xt-main-sidebar-item-height)] mx-2
            mb-1 justify-center items-center main-menu-item px-1"
            :class="usePermission.mainMenuActive === item.parentIndex ? 'is-active' : ''"
            :default-active="`${usePermission.mainMenuActive}`"
            @click="clickMainMenu(item.parentIndex!)"
          >
            <el-icon v-if="item.icon" :size="20">
              <svg-icon :name="item.icon" />
            </el-icon>
            <span class="truncate w-full text-center font-100" :title="item.title">{{ item.title }}</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-sidebar-container {
  background: v-bind(mainmenubgcolor);
}

.main-sidebar-menu-container {
  overflow: hidden auto;
  overscroll-behavior: contain;
  scrollbar-width: none;

  /* background: v-bind(mainmenubgcolor); */

  &::-webkit-scrollbar {
    display: none;
  }
}

.main-menu-item {
  // transition-duration: 0.3s;
  background: transparent;
  color: v-bind(mainmenutextcolor);

  &:hover {
    background: v-bind(mainmenuhoverbgcolor);
    color: v-bind(mainmenuhovertextcolor);
  }

  &.is-active {
    background: v-bind(mainmenuactivebgcolor);
    color: v-bind(mainmenuactivetextcolor);
  }
}

.dark {
  .main-sidebar-container {
    background: var(--xt-main-menu-bg-color);
  }

  .main-menu-item {
    transition-duration: 0.3s;
    background: transparent;
    color: var(--xt-main-menu-text-color);

    &:hover {
      background: var(--xt-main-menu-hover-bg-color);
      color: var(--xt-main-menu-hover-text-color);
    }

    &.is-active {
      background: var(--xt-main-menu-active-bg-color);
      color: var(--xt-main-menu-active-text-color);
    }
  }
}
</style>
