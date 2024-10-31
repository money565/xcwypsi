<script setup lang="ts">
import { type ITabbarRemove, useTabbarStore } from '@/stores/tabbar'
import useLayoutTools from '@/hooks/useLayoutTools'

interface IProps {
  clickIndex: number
}
const props = withDefaults(defineProps<IProps>(), {

})
const route = useRoute()
const activeIndex = computed(() => useTabbarStore().list.findIndex(v => v.fullPath === route.fullPath))
const disabledReload = computed(() => props.clickIndex !== activeIndex.value)
const disabledDelOnce = computed(() => useTabbarStore().list.length <= 1)
const disableDelLeft = computed(() => props.clickIndex === 0)
const disableDelRight = computed(() => props.clickIndex === useTabbarStore().list.length - 1)
const disableDelOtherAll = computed(() => useTabbarStore().list.length <= 1)

function closeTab(type?: ITabbarRemove) {
  if (!type) {
    if (props.clickIndex === activeIndex.value) {
      type = 'self'
    }
    else {
      type = 'otherOnce'
    }
  }

  if (type === 'self' && disabledDelOnce.value)
    return
  if (type === 'left' && disableDelLeft.value)
    return
  if (type === 'right' && disableDelRight.value)
    return
  if (type === 'otherAll' && disableDelOtherAll.value)
    return
  useTabbarStore().remove(type, props.clickIndex, activeIndex.value)
}
function reload() {
  if (disabledReload.value)
    return
  useLayoutTools().reload()
}
</script>

<template>
  <ul class="context-menu-container">
    <li :class="{ disabled: disabledReload }" @click="reload">
      刷新
    </li>
    <li :class="{ disabled: disabledDelOnce }" @click="closeTab()">
      关闭
    </li>
    <li :class="{ disabled: disableDelRight }" @click="closeTab('right')">
      关闭右侧
    </li>
    <li :class="{ disabled: disableDelLeft }" @click="closeTab('left')">
      关闭左侧
    </li>
    <li :class="{ disabled: disableDelOtherAll }" @click="closeTab('otherAll')">
      关闭其他
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.context-menu-container{
    @apply bg-white rounded-md font-normal shadow font-normal text-xs text-black py-1 z-3000 fixed;
    li{
    @apply cursor-pointer m-0 py-2 px-6 whitespace-nowrap hover:bg-gray-300;
        &.disabled{
            @apply bg-white cursor-not-allowed text-gray-400;
        }
    }
}
</style>
