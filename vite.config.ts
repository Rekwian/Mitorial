import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@vue2': path.resolve(__dirname, './output/vue/vue2/mito'),
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './assets'),
    }
  }
})
