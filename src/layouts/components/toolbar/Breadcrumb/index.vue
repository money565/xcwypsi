<script setup lang="ts">

</script>

<template>
  <el-breadcrumb class="text-sm inline-block" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item>homepage</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>
.breadcrumb-enter-active{
    transition: opacity 0.3s, transform 0.3s;
}

.breadcrumb-enter-from,
.breadcrumb-leave-active{
    opacity: 0;
    transform: translateX(100%) skewX(-40deg);
}
</style>
