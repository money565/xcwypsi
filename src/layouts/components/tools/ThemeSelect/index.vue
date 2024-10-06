<script setup lang="ts">
import SelectColor from './coms/SelectColor.vue'

withDefaults(defineProps<IProps>(), {
  size: 20,
})

interface IProps {
  size?: number
}

const selectColorRef = ref<InstanceType<typeof SelectColor>>()

function handleClick() {
  selectColorRef.value?.open()
}
</script>

<template>
  <el-icon :size="size" @click="handleClick">
    <svg-icon
      class="cursor-pointer"
      name="palette"
    />
  </el-icon>
  <SelectColor ref="selectColorRef" />
</template>

<style scoped>

</style>
