/// <reference types="vite/client" />
// 和env有关的配置文件
interface ImportMetaEnv {
  VITE_MODE_NAME: string
  VITE_APP_TITLE: string
  VITE_APP_API_BASEURL: string
  VITE_USE_MOCK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
