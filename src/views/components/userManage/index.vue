<script setup lang="ts">
defineOptions({
  name: 'UserManage',
})
const input = ref('')
</script>

<template>
  <div>
    用户设置
    <el-input v-model="input" placeholder="input" />
  </div>
</template>

<style scoped>

</style>
