import { defineConfig, loadEnv } from 'vite'

import alias from './vite/alias'
import setupVitePlugin from './vite/plugins'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // eslint-disable-next-line node/prefer-global/process
  const env = loadEnv(mode, process.cwd())
  return {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    plugins: setupVitePlugin(env, command === 'build'),
    resolve: {
      alias,
    },
  }
})
