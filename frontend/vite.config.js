import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://146.255.188.248:8090',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
