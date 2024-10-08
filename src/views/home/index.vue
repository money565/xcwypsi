<script setup lang="ts">
import { useAppConfigStore } from '@/stores/app'
import ChangLayoutMode from '@/layouts/components/tools/ChangLayoutMode/index.vue'
import SidebarCollapse from '@/layouts/components/tools/SidebarCollapse/index.vue'
import ChangeColorScheme from '@/layouts/components/tools/ChangeColorScheme/index.vue'
import ThemeSelect from '@/layouts/components/tools/ThemeSelect/index.vue'
import NoticeSlide from '@/components/NoticeSlide/index.vue'

const useAppConfig = useAppConfigStore()
function toggle() {
  useAppConfig.appConfig.defaultLanguage = 'en'
}

const dialogVisible = ref(false)
</script>

<template>
  <div>欢迎使用进销存psi系统</div>
  <SidebarCollapse :size="30" />
  <ChangeColorScheme />
  <el-button text @click="$event => dialogVisible = true">
    click to open dialog
  </el-button>
  <ThemeSelect />
  <NoticeSlide :list="['新的进销存系统培训', '进销存系统意见征求搞', '手机端进销存系统培训']" />
  <XtDialog v-model="dialogVisible" title="aa">
    111
  </XtDialog>
  <div>
    <ChangLayoutMode />
  </div>
  <el-pagination
    :page-size="100"
    layout="total, prev, pager, next"
    :total="1000"
  />
  <el-button mb-2 @click="toggle">
    更换语言
  </el-button>
  <div v-for="i in 100" :key="i">
    {{ i }}
  </div>
</template>

<style scoped>

</style>
