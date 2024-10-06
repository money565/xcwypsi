<script setup lang="ts">
import { useAppConfigStore } from '@/stores/app'
import ChangLayoutMode from '@/layouts/components/tools/ChangLayoutMode/index.vue'
import SidebarCollapse from '@/layouts/components/tools/SidebarCollapse/index.vue'
import ChangeColorScheme from '@/layouts/components/tools/ChangeColorScheme/index.vue'
import ThemeSelect from '@/layouts/components/tools/ThemeSelect/index.vue'
import NoticeSlide from '@/components/NoticeSlide/index.vue'

const useAppConfig = useAppConfigStore()
function toggle() {
  useAppConfig.appConfig.defaultLanguage = 'en'
}
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

function onSubmit() {
  console.log('submit!')
}

const dialogVisible = ref(false)
</script>

<template>
  <div>欢迎使用进销存psi系统</div>
  <SidebarCollapse :size="30" />
  <ChangeColorScheme />
  <el-button text @click="$event => dialogVisible = true">
    click to open dialog
  </el-button>
  <ThemeSelect />
  <NoticeSlide :list="['新的进销存系统培训', '进销存系统意见征求搞', '手机端进销存系统培训']" />
  <XtDialog v-model="dialogVisible" title="aa">
    111
  </XtDialog>
  <div>
    <ChangLayoutMode />
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </el-col>
        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-time-picker
            v-model="form.date2"
            placeholder="Pick a time"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox value="Online activities" name="type">
            Online activities
          </el-checkbox>
          <el-checkbox value="Promotion activities" name="type">
            Promotion activities
          </el-checkbox>
          <el-checkbox value="Offline activities" name="type">
            Offline activities
          </el-checkbox>
          <el-checkbox value="Simple brand exposure" name="type">
            Simple brand exposure
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio value="Sponsor">
            Sponsor
          </el-radio>
          <el-radio value="Venue">
            Venue
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          Create
        </el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
  <el-pagination
    :page-size="100"
    layout="total, prev, pager, next"
    :total="1000"
  />
  <el-button mb-2 @click="toggle">
    更换语言
  </el-button>
  <div v-for="i in 100" :key="i">
    {{ i }}
  </div>
</template>

<style scoped>

</style>
