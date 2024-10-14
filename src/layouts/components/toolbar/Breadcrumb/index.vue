<script setup lang="ts">
import type { RouteLocationMatched } from 'vue-router'
import router from '@/router'

const route = useRoute()
const breadcrumData = ref<RouteLocationMatched[]>([])

function onLinkClick(item: RouteLocationMatched) {
  router.push(item.path)
}

watch(() => route, (n) => {
  breadcrumData.value = n.matched.filter(item => item.meta && item.meta.title && !item.meta.hideInBreadCrumb)
}, { immediate: true, deep: true })
</script>

<template>
  <el-breadcrumb class="text-sm inline-block" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumData" :key="index">
        <span v-if="index === breadcrumData.length - 1">{{ item.meta.title }}</span>
        <a v-else @click="onLinkClick(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
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
