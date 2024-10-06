<script setup lang="ts">
import { useAppConfigStore } from '@/stores/app'
import useElementI18n from '@/hooks/useElementI18n'

const useAppConfig = useAppConfigStore()
const { locale } = useElementI18n()
</script>

<template>
  <el-config-provider :locale="locale" :size="useAppConfig.appConfig.elementSize">
    <RouterView />
  </el-config-provider>
</template>
