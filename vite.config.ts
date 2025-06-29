import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/portfolio/', // Replace 'portfolio' with your GitHub repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
