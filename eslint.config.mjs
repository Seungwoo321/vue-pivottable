import { defineConfig } from 'eslint/config'
import pluginVue from 'eslint-plugin-vue'
import standard from '@seungwoo321/eslint-plugin-standard-js'
import globals from 'globals'

export default defineConfig([
  {
    ignores: [
      'dist/**',
      'lib/**',
      'node_modules/**',
      'packages/*/dist/**',
      'packages/*/lib/**',
      'storybook-static/**',
      'docs/**',
      '*.min.js'
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    extends: [
      ...standard.configs.recommended,
      ...pluginVue.configs['flat/vue2-essential']
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
  }
])
