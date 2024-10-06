import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASEURL,
})

service.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

service.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  return Promise.reject(error)
})

function request<T = any>(config: AxiosRequestConfig<T>): Promise<T> {
  return new Promise((reslove, reject) => {
    service.request<any, T>(config).then((res) => {
      reslove(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function get<T = any>(url: string, config?: AxiosRequestConfig<T>): Promise<T> {
  return request <T> ({ ...config, method: 'GET', url })
}

export default service
