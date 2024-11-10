<script setup lang="ts">
interface IProps {
  size?: number
}

defineOptions({
  name: 'MenuSearch',
})

withDefaults(defineProps<IProps>(), {
  size: 20,
})
</script>

<template>
  <el-icon :size="size">
    <svg-icon class="cursor-pointer" name="search" />
  </el-icon>
</template>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    :deep(.el-input__inner) {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }

    :deep(.el-input__wrapper) {
      box-shadow: none !important;
    }

    :deep(.el-input__suffix) {
      display: none;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 0;
    }
  }
}
</style>
