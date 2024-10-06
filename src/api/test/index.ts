import { get } from '@/request'

interface IResult {
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
  return get<IDemo<IResult>>('/test')
}
