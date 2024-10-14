<script setup lang="ts" name="ChangeColorScheme">
import { useAppConfigStore } from '@/stores/app'

interface IProps {
  size?: number
}

withDefaults(defineProps<IProps>(), {
  size: 30,
})

function toggleClick() {
  useAppConfigStore().appConfig.app.colorScheme = useAppConfigStore().appConfig.app.colorScheme === 'dark' ? 'light' : 'dark'
}

watch(() => useAppConfigStore().appConfig.app.colorScheme, (val) => {
  if (val === '') {
    val = window.matchMedia('(perfers-color-scheme:dark)').matches ? 'dark' : 'light'
  }
  switch (val) {
    case 'dark':
      document.documentElement.classList.add('dark')
      break
    case 'light':
      document.documentElement.classList.remove('dark')
      break

    default:
      break
  }
}, { immediate: true })
</script>

<template>
  <el-icon :size="size" class="cursor-pointer" @click="toggleClick">
    <svg-icon
      :name="useAppConfigStore().appConfig.app.colorScheme === 'light' ? 'moon' : 'sunny'"
    />
  </el-icon>
</template>
