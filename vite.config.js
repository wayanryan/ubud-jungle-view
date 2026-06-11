import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/ubud-jungle-view/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Laravel compatibility: uncomment below when integrating with laravel-vite-plugin
  // build: {
  //   outDir: 'public/build',
  //   manifest: true,
  //   rollupOptions: {
  //     input: 'resources/js/app.js',
  //   },
  // },
  server: {
    port: 5173,
    host: true,
  },
})
