import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import federation from "@originjs/vite-plugin-federation";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: 'team-red',
      remotes: {
        "remote_wc_app": "http://localhost:3000/script.js",
      },
    }),
    vue(
      {
        template: {
          compilerOptions: {
            // treat all tags with a dash as custom elements
            isCustomElement: (tag) => tag.includes('-')
          }
        }
      }
    ),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
