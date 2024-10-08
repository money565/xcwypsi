// 放置动态路由
import demoRoutes from './modules/demo'
import demoRoutes2 from './modules/demo2'
import type { IPrivateRoutes } from './types/privateRoutes'

const privateRoutes: IPrivateRoutes[] = [
  {
    title: '演示1',
    icon: 'demo',
    children: [demoRoutes],
  },
  {
    title: '演示2',
    icon: 'demo2',
    children: [demoRoutes2],
  },
]

export default privateRoutes
