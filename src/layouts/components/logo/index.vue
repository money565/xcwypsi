<script setup lang="ts" name="logo">
import { useAppConfigStore } from '@/stores/app'

interface IProps {
  showLogoImage?: boolean
  showLogoText?: boolean
}

withDefaults(defineProps<IProps>(), {
  showLogoImage: true,
  showLogoText: true,
})

const useAppConfig = useAppConfigStore()
const logoBgColor = computed(() => {
  return useAppConfig.getTheme.logoBgColor
})
const logoTextColor = computed(() => {
  return useAppConfig.getTheme.logoTextColor
})

const title = ref(import.meta.env.VITE_APP_TITLE)
</script>

<template>
  <router-link
    to="/"
    :title="title"
    class="logo h-[var(--xt-log-height)] flex items-center justify-center flex-shrink-0
  px-2"
  >
    <el-avatar v-if="showLogoImage" :size="40" shape="square" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
    <span v-if="showLogoText" class="font-bold truncate ml-2">{{ title }}</span>
  </router-link>
</template>

<style lang="scss" scoped>
  .logo{
    width:inherit;
    color: v-bind(logoBgColor);
    background: v-bind(logoTextColor);
  }

  .dark .logo{
    color:var(--xt-sub-logo-text-color);
    background: var(--xt-sub-logo-bg-color);
  }
</style>
