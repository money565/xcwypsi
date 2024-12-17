<script setup lang="ts">
import { reactive, ref } from 'vue'
import { type ComponentSize, type FormInstance, type FormRules, type UploadInstance, type UploadProps, type UploadRawFile, genFileId } from 'element-plus'

defineOptions({
  name: 'CreateSupplier',
})
type taxRate = '1%' | '3%' | '6%' | '9%' | '13%'
interface RuleForm {
  name: string
  bank: string
  card_id: string
  address: string
  contact: string
  tel: string
  tax: taxRate
}

const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive<RuleForm>({
  name: 'Hello',
  bank: '',
  card_id: '',
  address: '',
  contact: '',
  tel: '',
  tax: '13%',
})

const locationOptions = ['1%', '3%', '6%', '9%', '13%']

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
})

async function submitForm(formEl: FormInstance | undefined) {
  if (!formEl)
    return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    }
    else {
      console.log('error submit!', fields)
    }
  })
}

function resetForm(formEl: FormInstance | undefined) {
  if (!formEl)
    return
  formEl.resetFields()
}
const upload = ref<UploadInstance>()
const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}
</script>

<template>
  <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <el-form-item label="供应商名称" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="开户银行" prop="name">
      <el-input v-model="ruleForm.bank" />
    </el-form-item>
    <el-form-item label="银行账号" prop="name">
      <el-input v-model="ruleForm.card_id" />
    </el-form-item>
    <el-form-item label="地址" prop="name">
      <el-input v-model="ruleForm.address" />
    </el-form-item>
    <el-form-item label="联系人" prop="name">
      <el-input v-model="ruleForm.contact" />
    </el-form-item>
    <el-form-item label="电话" prop="name">
      <el-input v-model="ruleForm.tel" />
    </el-form-item>
    <el-form-item label="税率" prop="location">
      <el-segmented v-model="ruleForm.tax" :options="locationOptions" />
    </el-form-item>
    <el-form-item label="资质" prop="location">
      <el-input v-model="ruleForm.tel" />
      <el-upload
        ref="upload"
        class="upload-demo"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :limit="1"
        :on-exceed="handleExceed"
        :auto-upload="false"
      >
        <template #trigger>
          <el-icon :size="30">
            <svg-icon name="uploadIcon" />
          </el-icon>
        </template>
      </el-upload>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">
        Reset
      </el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>

</style>
