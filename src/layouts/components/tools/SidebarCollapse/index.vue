<script setup lang="ts" name="SidebarCollapse">
import { useAppConfigStore } from '@/stores/app'

interface IProps {
  size?: number
}

withDefaults(defineProps<IProps>(), {
  size: 20,
})

function toggleClick() {
  useAppConfigStore().appConfig.nav.subMenuCollaspe = !useAppConfigStore().appConfig.nav.subMenuCollaspe
}
</script>

<template>
  <el-icon :size="size" class="cursor-pointer" @click="toggleClick">
    <svg-icon
      :name="useAppConfigStore().getCollapse ? 'exp' : 'coll'"
    />
  </el-icon>
</template>
