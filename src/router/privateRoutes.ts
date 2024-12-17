// 放置动态路由
import WarehouseManagement from './modules/WarehouseManagement'
import SupplierManagement from './modules/SupplierManagement'
import MaterialManagement from './modules/MaterialManagement'
import PlanPurchase from './modules/PlanPurchase'
import OrdersList from './modules/OrdersList'
import Outbound from './modules/Outbound'
import Records from './modules/Records'
import WarehouseStock from './modules/WarehouseStock'
import IssueInventory from './modules/IssueInventory'
import Procure from './modules/Procure'
import Payment from './modules/Payment'
import Audit from './modules/Audit'
import switchRouter from './modules/switchRouter'
import echartsRouter from './modules/echartsRouter'
import ai from './modules/ai'
import cacheRoutes from './modules/cache'
import userManage from './modules/userManage'
import FixedAsset from './modules/FixedAsset'
import LowValueAsset from './modules/LowValueAsset'
import ReuseMaterial from './modules/ReuseMaterial'
import SystemSetting from './modules/SystemSetting'

import type { IPrivateRoutes } from './types/privateRoutes'

const privateRoutes: IPrivateRoutes[] = [
  {
    title: '基本',
    icon: 'baseData',
    children: [SupplierManagement, WarehouseManagement, MaterialManagement],
  },
  {
    title: '存货',
    icon: 'demo',
    children: [Procure, Audit, PlanPurchase, OrdersList, Outbound, Records, WarehouseStock, IssueInventory, Payment],
  },
  {
    title: '数据',
    icon: 'demo2',
    children: [echartsRouter, ai, switchRouter],
  },
  {
    title: '资产',
    icon: 'device',
    children: [FixedAsset, LowValueAsset],
  },

  {
    title: '旧物',
    icon: 'reuse',
    children: [ReuseMaterial],
  },
  {
    title: '设置',
    icon: 'system',
    children: [cacheRoutes, userManage, SystemSetting],
  },
]

export default privateRoutes
