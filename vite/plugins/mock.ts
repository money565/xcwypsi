import { viteMockServe } from 'vite-plugin-mock'

export default function setupMock(isdBuild: boolean) {
  return viteMockServe({
    mockPath: 'src/mock',
    enable: !isdBuild,
  })
}
