import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/main.ce.ts', import.meta.url)),
      name: 'StarWarsDemoCustomElement',
      fileName: (format) => `starwars-demo-custom-element.${format}.js`
    },
    rollupOptions: {
      external: [],
      output: {
        format: 'es',
      }
    }
  }
})
