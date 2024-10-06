import components from 'unplugin-vue-components/vite'

export default function setupComponents() {
  return components({
    dirs: ['src/components', 'src/views'],
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    dts: 'types/components.d.ts',
  })
}
