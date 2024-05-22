// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath , URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // Set your alias here.
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
      { find: '@img', replacement: fileURLToPath(new URL('./src/assets/img', import.meta.url))},
    ],
  }
})
