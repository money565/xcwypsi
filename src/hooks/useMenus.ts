import type { RouteRecordRaw } from 'vue-router'
import * as path from 'path-browserify'
import { cloneDeep } from 'lodash'
import { usePermissionStore } from '@/stores/permission'
import { isEmpty } from '@/utils'
import { useAppConfigStore } from '@/stores/app'

function mergeRouterPath(routes: RouteRecordRaw[], basePath = '') {
  for (const i in routes) {
    const r = routes[i]
    r.path = path.resolve(basePath, r.path)
    if (!isEmpty(r.children)) {
      mergeRouterPath(r.children!, r.path)
    }
  }
  return routes
}

function generateMenus(allMergePathRoutes: RouteRecordRaw[]) {
  // 筛选路由，哪些路由用于跳转页面，哪些路由是菜单等等
  const result: RouteRecordRaw[] = []
  for (const item of allMergePathRoutes) {
    if (isEmpty(item) && isEmpty(item.children))
      continue
    if (isEmpty(item) && !isEmpty(item.children)) {
      result.push(...generateMenus(item.children!))
      continue
    }
    let route = result.find(res => res.path === item.path)
    if (!route) {
      route = {
        ...item,
        children: [],
      }
      if (route.meta?.title && !route.meta.hideInMenu) {
        // TODO: home页面是否开启判断
        result.push(route)
      }

      if (!isEmpty(item.children)) {
        route.children?.push(...generateMenus(item.children!))
      }
    }
  }
  return result
}

export default function useMenus() {
  const usePermission = usePermissionStore()
  const useAppConfig = useAppConfigStore()
  const allMergePathRoutes = mergeRouterPath(cloneDeep(usePermission.routes))
  const allSubMenu = generateMenus(allMergePathRoutes)

  const allMainMenu = computed(() => {
    return usePermission.addIndexPrivateRoutes.map((item) => {
      return {
        parentIndex: item.parentIndex,
        title: item.title,
        icon: item.icon,
        children: allSubMenu.filter(k => k.parentIndex === item.parentIndex),
      }
    })
  })

  console.log('usePermission', allMainMenu.value)
  const menus = computed(() => {
    if (['onlyTopNav', 'onlySubSideNav'].includes(useAppConfig.getLayoutMode)) {
      return allSubMenu
    }
    else {
      return allMainMenu.value[usePermission.mainMenuActive].children
    }
  })
  return {
    menus,
    allMainMenu,
  }
}
