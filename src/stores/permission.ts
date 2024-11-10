import type { RouteRecordRaw } from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import { useAppConfigStore } from './app'
import { useUserStore } from './user'
import type { Ipermission } from './types/permission'
import constantRouter from '@/router/constant'
import privateRoutes from '@/router/privateRoutes'
import type { IPrivateRoutes } from '@/router/types/privateRoutes'
import { isEmpty } from '@/utils'

function hasPermission(permission: Ipermission, route: RouteRecordRaw) {
  let isAuth = false
  if (route.meta?.auth) {
    isAuth = permission.some((auth) => {
      if (typeof route.meta?.auth === 'string') {
        return route.meta.auth === auth
      }
      else {
        return route.meta?.auth?.includes(auth)
      }
    })
  }
  else {
    isAuth = true
  }
  return isAuth
}

function filterPrivateRoutes(routes: RouteRecordRaw[], permission: Ipermission) {
  const res = [] as RouteRecordRaw[]
  routes.forEach((route) => {
    const tempRoute = cloneDeep(route)
    if (hasPermission(permission, tempRoute)) {
      if (tempRoute.children) {
        tempRoute.children = filterPrivateRoutes(tempRoute.children, permission)
        // eslint-disable-next-line ts/no-unused-expressions
        tempRoute.children.length && res.push(tempRoute)
      }
      else {
        res.push(tempRoute)
      }
    }
  })
  return res
}

function addPrivateChildrenIndex(privateChildrenRoutes: RouteRecordRaw[], parentIndex: number) {
  privateChildrenRoutes.forEach((item) => {
    item.parentIndex = parentIndex
    if (!isEmpty(item.children)) {
      addPrivateChildrenIndex(item.children!, item.parentIndex)
    }
  })
}

function addPrivateIndex(clonePrivateRoutes: IPrivateRoutes[]) {
  clonePrivateRoutes.forEach((item, i) => {
    item.parentIndex = i
    if (!isEmpty(item.children)) {
      addPrivateChildrenIndex(item.children, item.parentIndex)
    }
  })
  return clonePrivateRoutes
}
export const usePermissionStore = defineStore('permission', () => {
  // 过滤完成的路由表（固定的路由+动态路由）
  const routes = ref<RouteRecordRaw[]>([])
  // 当前主菜单高亮的项目
  const mainMenuActive = ref(0)

  const addIndexPrivateRoutes = computed(() => {
    const clonePrivateRoutes = cloneDeep(privateRoutes)
    return addPrivateIndex(clonePrivateRoutes)
  })

  const allPrivateChildrenRoutes = computed(() => {
    // 第一种写法
    return addIndexPrivateRoutes.value.map(item => item.children).flat()
    // 第二种写法
    // let routes: RouteRecordRaw[] = []
    // addIndexPrivateRoutes.value.forEach((item) => {
    //   routes = [...routes, ...item.children]
    // })
    // return routes
  })

  function init() {
    routes.value = []
    mainMenuActive.value = 0
  }

  function setRoutes(needDynamicallyAddRoutes: RouteRecordRaw[]) {
    routes.value = [...constantRouter, ...needDynamicallyAddRoutes] // 合并路由
  }

  function filterPermissionRoutes(): Promise<RouteRecordRaw[]> { // 过滤权限路由
    const useAppConfig = useAppConfigStore()
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (reslove, reject) => {
      try {
        let routes: RouteRecordRaw[] = []
        if (useAppConfig.getEnablePermission) {
          const useUser = useUserStore()
          if (useAppConfig.appConfig.app.routeMode === 'backend') {
            // .
          }
          else {
            const permission = await useUser.getPermissions()
            routes = filterPrivateRoutes(allPrivateChildrenRoutes.value, permission)
          }
        }
        else {
          routes = [...allPrivateChildrenRoutes.value]
        }
        setRoutes(routes)
        reslove(routes)
      }
      catch (error) {
        reject(error)
      }
    })
  }

  function changeMainMenu(index: number) {
    mainMenuActive.value = index
  }

  const subMenuActive = ref()
  return { routes, filterPermissionRoutes, mainMenuActive, subMenuActive, addIndexPrivateRoutes, changeMainMenu, init }
})
