import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue2'

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    plugins: [
      vue()
    ],
    publicDir: false,
    build: {
      type: ['es', 'umd'],
      lib: {
        entry: resolve(__dirname, 'src/index.js'),
        name: 'PlotlyRenderer',
        fileName: 'plotly-renderer'
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          exports: 'named',
          globals: {
            'vue': 'Vue',
            'vue-pivottable': 'VuePivottable'
          }
        }
      }
    }
  }
})
