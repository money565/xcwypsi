import type { RouteMeta } from 'vue-router'
import router from '@/router'

export interface ITabbarItem {
  fullPath: string
  meta: RouteMeta
  name: string // 组件的name不是路由的name
}

export type ITabbarRemove = 'self' | 'otherOnce' | 'right' | 'left' | 'otherAll'
export const useTabbarStore = defineStore('tabbar', () => {
  const list = ref<ITabbarItem[]>([])
  function add(tab: ITabbarItem) {
    if (tab.meta.mergeTabbarPath) {
      // TODO:mergeTabbarPath
    }
    else {
      const isFind = list.value.some(item => item.fullPath === tab.fullPath)
      if (!isFind) {
        // TODO:mergeTabbarPath
        list.value.push(tab)
      }
    }
  }
  function remove(type: ITabbarRemove, clickIndex: number, activeIndex: number) {
    // 有缓存需要清除缓存
    switch (type) {
      case 'self':
        if (clickIndex < list.value.length - 1) { // 判断是不是最后一项
          router.push(list.value[clickIndex + 1].fullPath)
        }
        else {
          router.push(list.value[clickIndex - 1].fullPath)
        }
        list.value.splice(clickIndex, 1)
        break
      case 'otherOnce':
        list.value.splice(clickIndex, 1)
        break
      case 'left':
        if (activeIndex < clickIndex)
          router.push(list.value[clickIndex].fullPath)
        list.value.splice(0, clickIndex)
        break
      case 'right':
        if (activeIndex > clickIndex)
          router.push(list.value[clickIndex].fullPath)
        list.value.splice(clickIndex + 1, list.value.length - 1 - clickIndex)
        break
      case 'otherAll':
        if (activeIndex !== clickIndex)
          router.push(list.value[clickIndex].fullPath)
        list.value = list.value.filter(item => item.fullPath === list.value[clickIndex].fullPath)
        break
    }
  }
  return { list, add, remove }
})
