<script setup lang="ts">
defineOptions({
  name: 'Outbound',
})
const input = ref('')
</script>

<template>
  <div>
    Outbound
    <el-input v-model="input" placeholder="请输入输出" />
  </div>
</template>

<style scoped>

</style>
