import { loginApi } from '@/api/test'
import { STORAGE_PREFIX, USER } from '@/config/chache'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const userInfo = ref<any>(null)

  const getToken = computed(() => token.value)

  function login() {
    return loginApi().then((res) => {
      token.value = res.result.token
      userInfo.value = res.result
      // LocalStorageService.set(USER, {
      //   token: token.value,
      // })
    })
  }
  return { token, userInfo, login, getToken }
}, {
  persist: {
    key: `${STORAGE_PREFIX}${USER}`,
    storage: localStorage,
  },
})
