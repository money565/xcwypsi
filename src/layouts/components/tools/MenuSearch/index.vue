<script setup lang="ts">
import type { ElTreeSelect } from 'element-plus'
import type { RouteRecordRaw } from 'vue-router'
import { cloneDeep } from 'lodash'
import useMenus from '@/hooks/useMenus'

interface IProps {
  size?: number
}

defineOptions({
  name: 'MenuSearch',
})

withDefaults(defineProps<IProps>(), {
  size: 20,
})

const { allSubMenu } = useMenus()
const targetRef = ref<HTMLDivElement>()
const isShow = ref<boolean>(false)
const headerSearchSelectRef = ref<InstanceType<typeof ElTreeSelect>>()
const search = ref('')
const searchOptions = ref<RouteRecordRaw[]>([])

function dealSearchData(routes: RouteRecordRaw[]) {
  const res = [] as any[]
  routes.forEach((route) => {
    const tmpRoute = cloneDeep(route)
    if (tmpRoute.children?.length) {
      tmpRoute.children = dealSearchData(tmpRoute.children)
      // eslint-disable-next-line ts/no-unused-expressions
      tmpRoute.children.length && res.push({
        label: tmpRoute.meta?.title,
        value: tmpRoute.path,
        children: tmpRoute.children,
      })
    }
    else {
      if (!tmpRoute.meta?.hideInBreadCrumb) {
        res.push({
          label: tmpRoute.meta?.title,
          value: tmpRoute.path,
          children: tmpRoute.children,
        })
      }
    }
  })
  return res
}

searchOptions.value = dealSearchData(allSubMenu)

function onShowClick() {
  isShow.value = !isShow.value
}
const router = useRouter()
function onSelectChange() {
  router.push(search.value)
}
</script>

<template>
  <div ref="targetRef" class="header-search flex items-center" :class="{ show: isShow }">
    <el-icon :size="size" @click="onShowClick">
      <svg-icon class="cursor-pointer" name="search" />
    </el-icon>

    <ElTreeSelect ref="headerSearchSelectRef" v-model="search" class="header-search-select" :data="searchOptions" filterable clearable default-expand-all @change="onSelectChange" />
  </div>
</template>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    :deep(.el-input__inner) {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }

    :deep(.el-input__wrapper) {
      box-shadow: none !important;
    }

    :deep(.el-input__suffix) {
      display: none;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 0;
    }
  }
}
</style>
