import zhCn from 'element-plus/es/locale/lang/zh-cn'
import zhTw from 'element-plus/es/locale/lang/zh-tw'
import en from 'element-plus/es/locale/lang/en'
import { useAppConfigStore } from '@/stores/app'

export default function useElementI18n() {
  const useAppConfig = useAppConfigStore()
  const locale = computed(() => {
    return useAppConfig.appConfig.defaultLanguage === 'zh-cn' ? zhCn : useAppConfig.appConfig.defaultLanguage === 'zh-tw' ? zhTw : en
  })
  return { locale }
}
