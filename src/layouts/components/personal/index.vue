<script setup lang="ts">
import { useUserStore } from '@/stores/user'

defineOptions({
  name: 'PersinalSelect',
})
const router = useRouter()
function logoutApp() {
  useUserStore().logout().then(() => {
    router.replace({
      path: '/login',
    })
  })
}
</script>

<template>
  <el-dropdown>
    <div>
      <el-avatar :size="30">
        <SvgIcon name="avatar" />
      </el-avatar>
    </div>
    <template #dropdown>
      <el-dropdown-item>
        <router-link to="/personal">
          <el-dropdown-item>
            个人设置
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided @click="logoutApp">
          退出
        </el-dropdown-item>
      </el-dropdown-item>
    </template>
  </el-dropdown>
</template>

<style scoped>

</style>
