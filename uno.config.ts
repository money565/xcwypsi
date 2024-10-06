// uno.config.ts
import { defineConfig, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno()],
  transformers: [
    transformerDirectives(),
  ],
})
