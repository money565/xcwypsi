<script setup lang="ts" name="SubSidebar">
import logo from '../logo/index.vue'
import SubSideItem from './SidebarItem.vue'
import { useAppConfigStore } from '@/stores/app'

const useAppConfig = useAppConfigStore()
const showLogo = computed(() => {
  return ['onlySubSideNav', 'mainSubSideNav'].includes(useAppConfig.getLayoutMode)
})

const submenungcolor = computed(() => useAppConfig.getTheme.menuBgColor)

const subSidebarWidth = computed(() => {
  if (!useAppConfig.getCollapse) {
    return `w-[var(--xt-sub-sidebar-width)]`
  }
  else {
    return `w-[var(--xt-sub-sidebar-collapse-width)]`
  }
})

const menus = [{
  path: '/demo1',
  meta: {
    icon: 'WarehouseManagement',
    title: '仓库管理',
  },
}, {
  path: '/demo2',
  meta: {
    icon: 'SupplierManagement',
    title: '供应商管理',
  },
}, {
  path: '/demo3',
  meta: {
    icon: 'MaterialManagement',
    title: '存货管理',
  },
}, {
  path: '/demo4',
  meta: {
    icon: 'PlanPurchase',
    title: '日常采购',
  },
}, {
  path: '/demo5',
  meta: {
    icon: 'OrdersList',
    title: '要货单',
  },
}, {
  path: '/demo6',
  meta: {
    icon: 'Outbound',
    title: '出库单',
  },
}, {
  path: '/demo7',
  meta: {
    icon: 'Records',
    title: '出入库记录',
  },
}, {
  path: '/demo8',
  meta: {
    icon: 'WarehouseStock',
    title: '当前库存',
  },
}, {
  path: '/demo9',
  meta: {
    icon: 'IssueInventory',
    title: '库存发放',
  },
}, {
  path: '/demo10',
  meta: {
    icon: 'Procure',
    title: '计划内采购',
  },
}, {
  path: '/demo11',
  meta: {
    icon: 'Payment',
    title: '付款单',
  },
}, {
  path: '/demo12',
  meta: {
    icon: 'Audit',
    title: '审核',
  },
}, {
  path: '/demo13',
  meta: {
    icon: 'switch',
    title: '阈值设定',
  },
}, {
  path: '/demo14',
  meta: {
    icon: 'echarts',
    title: '数据图表',
  },
}, {
  path: '/demo15',
  meta: {
    icon: 'ai',
    title: 'AI智能',
  },
}]

watch(() => useAppConfig.getTheme.menuBgColor, (n: any) => {
  console.log('颜色改变', n)
}, { immediate: true })

onMounted(() => {
  setTimeout(() => {
    console.log('颜色', submenungcolor.value)
  }, 2000)
})
</script>

<template>
  <div class="flex flex-col sub-sidebar-container" :class="[subSidebarWidth]">
    <logo
      v-if="showLogo"
      :show-logo-image="useAppConfig.getLayoutMode === 'mainSubSideNav' ? false : true"
      :show-logo-text="useAppConfig.getLayoutMode === 'onlySubSideNav' && useAppConfig.getCollapse ? false : true"
    />
    <div class="flex-1 overflow-hidden hover:overflow-y-auto">
      <el-menu
        :collapse="useAppConfig.getCollapse"
        :collapse-transition="false"
      >
        <template v-for="item in menus" :key="item.path">
          <SubSideItem :menu="item" />
        </template>
      </el-menu>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sub-sidebar-container{
 background: v-bind(submenungcolor);
 :deep(.el-menu){
    background: v-bind(submenungcolor);
    border-right: none;
  }
}

.dark {
  .sub-sidebar-container{
    background: var(--xt-sub-sidebar-bg-color);

    :deep(.el-menu){
      background: var(--xt-sub-sidebar-bg-color);
    }
  }
}
</style>
