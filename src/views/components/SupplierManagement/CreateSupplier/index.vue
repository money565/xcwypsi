<script setup lang="ts">
defineOptions({
  name: 'CreateSupplier',
})
const input = ref('')
</script>

<template>
  <div>
    新增供应商
    <el-input v-model="input" placeholder="供应商名称" />
  </div>
</template>

<style scoped>

</style>
