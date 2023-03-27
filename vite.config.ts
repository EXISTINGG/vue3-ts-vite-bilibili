import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 导入相关配置(详见vant官方文档)
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
// 引入path
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置插件vant
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  // 使用 less
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  // 使用@(注意引入path)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
