import { createRouter, createWebHashHistory } from 'vue-router'
import { useNProgress } from '@vueuse/integrations/useNProgress'
import constantRoutes from './constant'
import { usePermissionStore } from '@/stores/permission'

const { isLoading } = useNProgress()

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    ...constantRoutes,
  ],
})
let sign = false
router.beforeEach(async (to, from, next) => { // 菜单按钮按下
  isLoading.value = true
  const usePermission = usePermissionStore()
  if (!sign && !usePermission.routes.length) {
    const filterRoutes = await usePermission.filterPermissionRoutes()
    sign = true
    filterRoutes.forEach((item) => {
      router.addRoute(item)
    })

    next(to.fullPath)
  }
  else {
    next()
  }
})

router.afterEach(() => {
  isLoading.value = false
})
export default router
