import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts:  ['agenda-exercise-321.fly.dev'],
    preview: {
      host: '0.0.0.0',
      port: 8080
    },
    proxy: {
      '/api': {
        target: 'https://localhost:3001', // Ajusta el puerto al de tu servidor (index.js)
        changeOrigin: true,
      },
    },
  },
})
