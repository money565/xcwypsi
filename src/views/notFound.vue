<script setup lang="ts">
const router = useRouter()
function goHome() {
  router.push('/')
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center
  bg-gradient-to-r from-purple-300 to-blue-200"
  >
    <div
      class="bg-white rounded-md flex flex-col py-12 w-[500px]
     items-center justify-center"
    >
      <div class="font-bold text-9xl text-purple-400">
        404
      </div>
      <div class="font-medium py-10 text-4xl dark:text-dark-800">
        未找到页面
      </div>
      <div class="font-medium pb-8 text-2xl dark:text-dark-800">
        您正在搜寻的页面不存在
      </div>
      <div>
        <button
          class="back-btn"
          @click="goHome"
        >
          返回首页
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.back-btn{
  @apply bg-gradient-to-r from-purple-400 to-blue-500
  rounded-md font-semibold py-3 px-6 hover:from-pink-500 hover:to-orange-500
}
</style>
