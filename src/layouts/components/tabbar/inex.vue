<script setup lang="ts">
import BScroll from '@better-scroll/core'
import ContextMenu from './ContextMenu/index.vue'
import { useAppConfigStore } from '@/stores/app'

const scrollRef = ref()
const scrolltemRef = ref()
const bs = ref()
const visible = ref(false)

onMounted(() => {
  bs.value = new BScroll(scrollRef.value, {
    scrollX: true,
    probType: 0,
  })
})

onUnmounted(() => {
  bs.value.destroyed()
})
const demolist = ref<any[]>([])
const useAppConfig = useAppConfigStore()
const tabbarBgColor = computed(() => useAppConfig.getTheme.tabbarBgColor)
const tabbarItemBgColor = computed(() => useAppConfig.getTheme.tabbarItemBgColor)
const tabbarItemActiveBgColor = computed(() => useAppConfig.getTheme.tabbarItemActiveBgColor)
const tabbarItemHoverBgColor = computed(() => useAppConfig.getTheme.tabbarItemHoverBgColor)
const tabbarItemTextColor = computed(() => useAppConfig.getTheme.tabbarItemTextColor)
const tabbarItemActiveTextColor = computed(() => useAppConfig.getTheme.tabbarItemActiveTextColor)
const tabbarItemHoverTextColor = computed(() => useAppConfig.getTheme.tabbarItemHoverTextColor)

const demoIndex = ref(0)
function demo(index: number) {
  demoIndex.value = index
  bs.value.refresh()
  bs.value.scrollToElement(scrolltemRef.value.children[index], 500, true)
}

const route = useRoute()
watch(() => route, (val) => {
  if (!val.meta || !val.meta.title) {
    return
  }
  const { path, fullPath, meta, matched } = val
  console.log(val)
  demolist.value.push({
    path,
    fullPath,
    meta,
    name: matched.find(v => v.path)?.components?.default.name || '',
  })
}, { immediate: true, deep: true })

const contextStyle = reactive({
  left: '0',
  top: '0',
})
function openMenu(e: MouseEvent) {
  const { x, y } = e
  contextStyle.left = `${x}px`
  contextStyle.top = `${y}px`
  console.log(contextStyle)
  visible.value = true
}

function closeMenu() {
  visible.value = false
}

watch(visible, () => {
  if (visible.value) {
    document.body.addEventListener('click', closeMenu)
  }
  else {
    document.body.removeEventListener('click', closeMenu)
  }
})
</script>

<template>
  <div
    ref="scrollRef"
    class="h-[var(--xt-toolbar-height)] text-xs flex items-center w-full
   whitespace-nowrap overflow-hidden  tabbar-content"
  >
    <div ref="scrolltemRef" class="px-2 flex h-full py-1">
      <template v-for="(tag, tagI) in demolist" :key="tagI">
        <div
          class="tabbar-item mr-2 px-2 flex items-center h-full rounded-md cursor-pointer duration-300"
          :class="tag.fullPath === route.fullPath ? 'active' : ''"
          @click="demo(tagI)"
          @contextmenu.prevent="openMenu"
        >
          <span class="w-20 truncate">{{ tag.meta.title }}</span>
          <el-icon v-show="demolist.length > 1" class="ml-2 close-icon">
            <SvgIcon name="close" />
          </el-icon>
        </div>
      </template>
    </div>
    <Teleport to="body">
      <ContextMenu v-show="visible" :style="contextStyle" />
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
.tabbar-content {
  background: v-bind(tabbarBgColor);

  .tabbar-item {
    background: v-bind(tabbarItemBgColor);
    color: v-bind(tabbarItemTextColor);

    &:hover {
      background: v-bind(tabbarItemHoverBgColor);
      color: v-bind(tabbarItemHoverTextColor);
    }

    &.active {
      background: v-bind(tabbarItemActiveBgColor);
      color: v-bind(tabbarItemActiveTextColor);
      border-bottom: 2px solid v-bind(tabbarItemActiveTextColor);
    }

    .close-icon{
      &:hover{
           background-color: aqua;
      }
    }
  }
}

.dark .tabbar-content {
  background: var(--xt-tabbar-bg-color);

  .tabbar-item {
    background: var(--xt-tabbar-item-bg-color);
    color: var(--xt-tabbar-item-text-color);

    &:hover {
      background: var(--xt-tabbar-item-hover-bg-color);
      color: var(--xt-tabbar-item-hover-text-color);
    }

    &.active {
      background: var(--xt-tabbar-item-active-bg-color);
      color: var(--xt-tabbar-item-active-text-color);
      border-bottom: 2px solid var(--xt-tabbar-item-active-text-color);
    }
  }
}
</style>
