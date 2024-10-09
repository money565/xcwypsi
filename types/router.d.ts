// typings.d.ts 或 router.ts
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string // 标题
    icon?: string // 菜单图标
    hideInMenu?: boolean // 是否在菜单中显示
    hideInBreadCrumb?: boolean // 是否在面包屑中显示
    hideInSearch?: boolean // 是否在搜索中显示
    mergeTabbarPath?: string // 要合并Tabbar的fullpath
    activeMenu?: string // 高亮的菜单
    auth?: string | string[] // 权限
    cache?: boolean | string | string[] // 是否需要缓存
    noCache?: string | string[] // 不缓存的页面name（当cache存在才生效）
    isWhite?: boolean// 是否是白名单
  }
  interface _RouteRecordBase {
    parentIndex?: number
  }
}
