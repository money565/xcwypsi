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

import type { IPrivateRoutes } from './types/privateRoutes'

const privateRoutes: IPrivateRoutes[] = [
  {
    title: '业务',
    icon: 'demo',
    children: [SupplierManagement, WarehouseManagement, MaterialManagement, Procure, Audit, PlanPurchase, OrdersList, Outbound, Records, WarehouseStock, IssueInventory, Payment],
  },
  {
    title: '数据',
    icon: 'demo2',
    children: [echartsRouter, ai, switchRouter],
  },
  {
    title: '系统',
    icon: 'system',
    children: [cacheRoutes, userManage],
  },
]

export default privateRoutes
