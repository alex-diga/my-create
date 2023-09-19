import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    // 配置 Network
    host: '0.0.0.0',
    port: 3000,
  },
  resolve: {
    // 路径别名
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  // vite 默认使用的是 esbuild 压缩，配置生产环境移除 console
  esbuild: {
    drop: ['console', 'debugger'],
  },
  define: {
    'process.env': {
      MOCK_PATH: process.env.NODE_ENV === 'production' ? '' : '127.0.0.1',
    },
  },
})
