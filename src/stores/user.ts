import type { Ipermission } from './types/permission'
import { useTabbarStore } from './tabbar'
import { usePermissionStore } from './permission'
import { useKeepAliveStore } from './keepAlive'
import { logOutApi, loginApi, permissionApi } from '@/api/test'
import { STORAGE_PREFIX, USER } from '@/config/chache'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const userInfo = ref<any>(null)
  const permissions = ref<Ipermission>([])
  const getToken = computed(() => token.value)
  function init() {
    token.value = ''
    userInfo.value = null
    permissions.value = []
    useTabbarStore().init()
    usePermissionStore().init()
    useKeepAliveStore().init()
  }
  // 登录
  function login() {
    return loginApi().then((res) => {
      token.value = res.result.token
      userInfo.value = res.result
      // LocalStorageService.set(USER, {
      //   token: token.value,
      // })
    })
  }

  // 退出登录
  function logout() {
    return logOutApi().then(() => {
      init()
    })
  }

  // 获取权限
  function getPermissions() {
    return permissionApi().then((res) => {
      console.log(res)
      permissions.value = res.result.permissions
      return permissions.value
    })
  }

  return { token, userInfo, login, logout, getToken, getPermissions, permissions }
}, {
  persist: {
    key: `${STORAGE_PREFIX}${USER}`,
    storage: localStorage,
  },
})
