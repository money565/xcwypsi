import sysGlobalConfig from '@/app'
import { APP_CONFIG, STORAGE_PREFIX } from '@/config/chache'

export const useAppConfigStore = defineStore('app', () => {
  const appConfig = ref({
    ...sysGlobalConfig,
  })

  const getLayoutMode = computed(() => {
    return appConfig.value.app.layoutMode
  })

  const getCollapse = computed(() => {
    return appConfig.value.nav.subMenuCollaspe
  })

  const getColorScheme = computed(() => {
    return appConfig.value.app.colorScheme
  })

  const getTheme = computed(() => {
    return appConfig.value.theme
  })
  return { appConfig, getLayoutMode, getCollapse, getColorScheme, getTheme }
}, {
  persist: {
    key: `${STORAGE_PREFIX}${APP_CONFIG}`,
    storage: localStorage,
  },
})
