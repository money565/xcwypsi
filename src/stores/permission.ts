import type { RouteRecordRaw } from 'vue-router'
import { cloneDeep, isEmpty } from 'lodash'
import { useAppConfigStore } from './app'
import constantRouter from '@/router/constant'
import privateRoutes from '@/router/privateRoutes'
import type { IPrivateRoutes } from '@/router/types/privateRoutes'

function addPrivateChildrenIndex(privateChildrenRoutes: any, parentIndex: number) {
  privateChildrenRoutes.forEach((item: any) => {
    item.parentIndex = parentIndex
    if (!isEmpty(item.children)) {
      addPrivateChildrenIndex(item.children, item.parentIndex)
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
}
export const usePermissionStore = defineStore('permission', () => {
  // 过滤完成的路由表（固定的路由+动态路由）
  const routes: any = ref([])
  // 当前主菜单高亮的项目
  const mainMenuActive = ref(0)

  const addIndexPrivateRoutes = computed(() => {
    const clonePrivateRoutes = cloneDeep(privateRoutes)
    return addPrivateIndex(clonePrivateRoutes)
  })

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
    routes.value = [...constantRouter, ...needDynamicallyAddRoutes] // 合并路由
  }

  function filterPermissionRoutes(): Promise<RouteRecordRaw[]> { // 过滤权限路由
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
  return { routes, filterPermissionRoutes, mainMenuActive, addIndexPrivateRoutes }
})
