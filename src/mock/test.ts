import Mock from 'mockjs'
import type { MockMethod } from 'vite-plugin-mock'

export default [{
  url: '/api/test',
  method: 'get',
  response: () => {
    return {
      code: 200,
      message: '请求成功',
      type: 'success',
      result: {
        name: 'xcpsi_admin',
        rank: 1,
        ddingID: '2222222',
        token: String(Mock.Random.string()),
      },
    }
  },
}] as MockMethod[]
