import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://laravel-todo-api-pro-main.test',
        changeOrigin: true,
      },
      '/sanctum': {
        target: 'http://laravel-todo-api-pro-main.test',
        changeOrigin: true,
      }
    }
  }
})
