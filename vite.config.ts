import {fileURLToPath, URL} from 'node:url'

import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: 'localhost.shawf.me',
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://test-test.shawf.me', // 目标地址（通过环境变量动态配置）
        changeOrigin: true, // 启用跨域支持
        // secure: false, // 跳过证书认证
        // ws: true, // 支持ws协议
        // rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径（移除 /api 前缀）
      },
    },
  },
})
