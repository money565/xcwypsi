<script setup lang="ts" name="XtDialog">
interface IProps {
  modelValue: boolean
  loading?: boolean
  showCancel?: boolean
  showConfirm?: boolean
  cancelButtonText?: string
  confirmButtonText?: string
}

const props = withDefaults(defineProps<IProps>(), {
  loading: false,
  showCancel: true,
  showConfirm: true,
  cancelButtonText: '取消',
  confirmButtonText: '确认',
})

const emits = defineEmits(['update:modelValue', 'cancel', 'confirm'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  },
})

function handCancel() {
  emits('cancel')
}
function handConfirm() {
  emits('confirm')
}
</script>

<template>
  <el-dialog
    v-model="value"
    class="xt-base-dialog"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    v-bind="$attrs"
  >
    <slot />
    <template #footer>
      <slot name="footer">
        <span v-if="showCancel || showConfirm">
          <el-button v-if="showCancel" @click="handCancel">
            {{ cancelButtonText }}
          </el-button>
          <el-button
            v-if="showConfirm"
            type="primary"
            :loading="loading"
            @click="handConfirm"
          >
            {{ confirmButtonText }}
          </el-button>
        </span>
      </slot>
    </template>
  </el-dialog>
</template>
