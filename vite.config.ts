import { URL, fileURLToPath } from 'node:url';
import { createHtmlPlugin } from 'vite-plugin-html';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      entry: '/src/index.ts',
      template: 'public/index.html'
    }),
    splitVendorChunkPlugin()
  ],
  css: {},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    open: true,
    port: 3000
  }
});
