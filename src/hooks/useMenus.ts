import type { RouteRecordRaw } from 'vue-router'
import * as path from 'path-browserify'
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
  try {
    const allMergePathRoutes = mergeRouterPath(JSON.parse(JSON.stringify(usePermission.routes)))
    const allSubMenu = generateMenus(allMergePathRoutes)
    console.log(allSubMenu)
    const menus = computed(() => {
      if (['onlyTopNav', 'onlySubSideNav', 'mainSubSideNav'].includes(useAppConfig.getLayoutMode)) {
        return allSubMenu
      }
      else {
        const temp = {
          name: 'demo1',
          path: '/demo1',
          redirect: '/demo1/demo1-1',
          meta: { title: '空菜单', icon: 'psi' },
        }
        return [temp]
      }
    })
    return {
      menus,
    }
  }
  catch (error) {
    console.log(error)
  }
}
