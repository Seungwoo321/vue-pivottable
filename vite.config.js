import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
const path = require('path')

module.exports = defineConfig({
  plugins: [createVuePlugin({})],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'vue-pivottable',
      formats: ['es', 'cjs', 'umd'],
      fileName: format => `vue-pivottable.${format}.js`
    },
    emptyOutDir: false,
    outDir: path.resolve(__dirname, 'dist'),
    assetsInlineLimit: 0,
    polyfillModulePreload: true,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
