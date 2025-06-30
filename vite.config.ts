import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/portfolio/', // Replace 'your-actual-repo-name' with your GitHub repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
