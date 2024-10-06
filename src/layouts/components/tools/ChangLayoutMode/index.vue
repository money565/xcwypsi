<script setup lang="ts" name="ChangeLayoutMode">
import { useAppConfigStore } from '@/stores/app'

const useAppConfig = useAppConfigStore()
const getLayoutMode = ref(useAppConfig.getLayoutMode)

const layouModeOption = reactive([
  {
    label: '只有顶部导航',
    value: 'onlyTopNav',
  },
  {
    label: '只有侧边栏导航',
    value: 'onlySubSideNav',
  },
  {
    label: '侧边主导航+侧边次栏导航',
    value: 'mainSubSideNav',
  },
  {
    label: '顶部主导航+侧边次栏导航',
    value: 'topSubSideNav',
  },
])
function changeLayoutMode(value: layoutMode) {
  useAppConfig.appConfig.app.layoutMode = value
}
</script>

<template>
  <div>
    <el-select v-model="getLayoutMode" @change="changeLayoutMode">
      <el-option v-for="item in layouModeOption" :key="item.value" :value="item.value" :label="item.label" />
    </el-select>
  </div>
</template>

<style scoped>

</style>
