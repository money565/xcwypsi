import { get } from '@/request'

interface IResult {
  permissions: string[]
  name: string
  rank: number
  ddingID: string
  token: string
}
interface IDemo<T> {
  code: number
  message: string
  result: T
  type: string
}

export function loginApi() {
  return get<IDemo<IResult>>('/testLogin')
}

export function permissionApi() {
  return get<IDemo<IResult>>('/user/permission')
}
