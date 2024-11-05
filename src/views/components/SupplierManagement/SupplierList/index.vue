<script setup lang="ts">
defineOptions({
  name: 'SupplierList',
})
const router = useRouter()
const route = useRoute()
interface User {
  index: number
  name: string
  creatData: string
  bestSellers: string
  amount: number
  rank: number
}

const notShowChild = computed(() => {
  console.log(route)
  if (route.name === 'supplierList') {
    return true
  }
  else {
    return false
  }
})
function handleClick(row: any) {
  router.push({
    name: 'supplierDetail',
    query: {
      id: row.index,
    },
  })
}
function tableRowClassName({
  rowIndex,
}: {
  row: User
  rowIndex: number
}) {
  if (rowIndex === 1) {
    return 'warning-row'
  }
  else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}

const tableData: User[] = [
  {
    index: 1,
    name: '成都超润清洁科技有限公司',
    creatData: '2016-05-03',
    bestSellers: '吸水毛净、拖布、清洁刷',
    amount: 158963.00,
    rank: 3,
  },
  {
    index: 2,
    name: '成都百盛清洁用品有限公司',
    creatData: '2018-06-23',
    bestSellers: '餐具洗洁精、机用洗洁精、洗手粉',
    amount: 1458553.00,
    rank: 2,
  },
  {
    index: 3,
    name: '成都棋仁日化用品有限公司',
    creatData: '2013-04-06',
    bestSellers: '消毒手套、竹夹、双面平拖',
    amount: 258963.00,
    rank: 5,
  },
  {
    index: 4,
    name: '北京帅郎制衣有限公司',
    creatData: '2011-11-24',
    bestSellers: '工服、工裤、工鞋',
    amount: 168963.00,
    rank: 4,
  },
]
</script>

<template>
  <div v-if="notShowChild" class="p-5">
    <div>供应商列表</div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column label="序号" width="80">
        <template #default="scope">
          <div>{{ scope.row.index }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="供应商名称" width="260" />
      <el-table-column prop="creatData" label="供应时间" width="150" />
      <el-table-column prop="bestSellers" label="主要采购物品" width="260" />
      <el-table-column prop="amount" label="采购金额" width="260" />
      <el-table-column label="星级">
        <template #default="scop">
          <el-rate
            v-model="scop.row.rank"
            disabled
            show-score
            text-color="#ff9900"
          />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="Operations" min-width="120">
        <template #default="{ row }">
          <el-button type="primary" size="small" @click="handleClick(row)">
            详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <router-view v-if="!notShowChild" />
</template>

<style lang="scss">
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
