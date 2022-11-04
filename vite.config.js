import { defineConfig } from 'vite'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import vue from '@vitejs/plugin-vue2'

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    plugins: [
      vue(),
      viteStaticCopy({
        targets: [
          {
            src: 'src/assets/vue-pivottable.css',
            dest: '.'
          }
        ]
      })
    ],
    publicDir: false,
    build: {
      type: ['es', 'umd'],
      lib: {
        entry: resolve(__dirname, 'src/index.js'),
        name: 'VuePivottable',
        fileName: 'vue-pivottable'
      }
    }
  }
})
