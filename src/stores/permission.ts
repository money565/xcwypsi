import type { RouteRecordRaw } from 'vue-router'
import { useAppConfigStore } from './app'
import constantRouter from '@/router/constant'
import privateRoutes from '@/router/privateRoutes'

export const usePermissionStore = defineStore('permission', () => {
  // 过滤完成的路由表（固定的路由+动态路由）
  let routes = [] as RouteRecordRaw[]

  const allPrivateChildrenRoutes = computed(() => {
    // 第一种写法
    return privateRoutes.map(item => item.children).flat()
    // 第二种写法
    // let routes: RouteRecordRaw[] = []
    // privateRoutes.forEach((item) => {
    //   routes = [...routes, ...item.children]
    // })
    // return routes
  })

  function setRoutes(needDynamicallyAddRoutes: RouteRecordRaw[]) {
    routes = [...constantRouter, ...needDynamicallyAddRoutes] // 合并路由
  }

  function filterPermissionRoutes() { // 过滤权限路由
    const useAppConfig = useAppConfigStore()
    return new Promise((reslove, reject) => {
      try {
        let routes: RouteRecordRaw[] = []
        if (useAppConfig.getEnablePermission) {
        // TODDO:按权限过滤路由
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
  return { routes, filterPermissionRoutes }
})
