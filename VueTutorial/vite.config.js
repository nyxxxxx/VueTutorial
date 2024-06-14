// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath , URL } from 'url';
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'

const AutoImportConfig = {
  imports: [
    'vue',
    'vue-router',
  ]
}

import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'

const ComponentsConfig = {
  dirs: ['./src/components'],
  extensions: ['vue'],
  dts: false,
  deep: true,
  resolvers: [
    PrimeVueResolver(),
  ]
}

// more details https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport(AutoImportConfig),
    Components(ComponentsConfig),
  ],
  resolve: {
    // Set your alias here.
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
      { find: '@img', replacement: fileURLToPath(new URL('./src/assets/img', import.meta.url))},
      { find: '@plugins', replacement: fileURLToPath(new URL('./src/assets/plugins', import.meta.url))},
      { find: '@style', replacement: fileURLToPath(new URL('./src/assets/style', import.meta.url))},
      { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url))},
    ],
  },
})
