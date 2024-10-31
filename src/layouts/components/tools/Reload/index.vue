<script setup lang="ts">
import useLayoutTools from '@/hooks/useLayoutTools'

interface IProps {
  size?: number
}
withDefaults(defineProps<IProps>(), {
  size: 20,
})

function reload() {
  useLayoutTools().reload()
}
</script>

<template>
  <div>
    <el-icon :size="size" @click="reload">
      <SvgIcon name="reload" class="cursor-pointer" />
    </el-icon>
  </div>
</template>

<style scoped>

</style>
