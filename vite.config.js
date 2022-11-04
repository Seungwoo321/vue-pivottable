import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import postcss from './postcss.config.js';
import { resolve } from 'path'
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
                name: 'VuePivottable',
                fileName: 'vue-pivottable'
            }
        },
        css: {
            devSourcemap: true,
            postcss
        },
        resolve: {
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
            alias: [
                {
                    find: '@',
                    replacement: resolve(__dirname, 'src/')
                },
                {
                    find: /^~(.*)$/,
                    replacement: '$1',
                }
            ]
        }
    }
})