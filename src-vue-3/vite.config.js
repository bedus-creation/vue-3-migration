import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/vue-3/',
  build: {
    outDir: '../public/vue-3',
    emptyOutDir: true,
  },
})
