import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import setAutoImport from './auto-import'
import setupComponents from './components'
import setupSvgIcon from './svg-icon'
import setupExtendPlus from './extend-plus'
import setupMock from './mock'

export default function setupVitePlugin(viteEnv: Record<string, string>, isBuild: boolean) {
  console.log(viteEnv)
  const { VITE_USE_MOCK } = viteEnv

  const plugins: PluginOption = [
    vue(),
    vueJsx(),
    UnoCSS(),
  ]
  plugins.push(setAutoImport())
  plugins.push(setupComponents())
  plugins.push(setupExtendPlus())
  plugins.push(setupSvgIcon(isBuild))
  plugins.push(setupMock(isBuild))
  VITE_USE_MOCK === 'true' && plugins.push(setupMock(isBuild))
  return plugins
}
