import { loginApi } from '@/api/test'
import { STORAGE_PREFIX, USER } from '@/config/chache'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const userInfo = ref<any>(null)

  function login() {
    return loginApi().then((res) => {
      token.value = res.result.token
      userInfo.value = res.result
      // LocalStorageService.set(USER, {
      //   token: token.value,
      // })
    })
  }
  return { token, userInfo, login }
}, {
  persist: {
    key: `${STORAGE_PREFIX}${USER}`,
    storage: localStorage,
  },
})
