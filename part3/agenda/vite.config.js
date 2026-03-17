import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Ajusta el puerto al de tu servidor (index.js)
        changeOrigin: true,
      },
    },
  },
})
