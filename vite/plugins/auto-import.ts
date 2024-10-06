import AutoImport from 'unplugin-auto-import/vite'

export default function setAutoImport() {
  return AutoImport({
    imports: ['vue', 'vue-router', 'pinia'],
    dts: 'types/auto-imports.d.ts',
  })
}
