import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Configura el puerto a 3000
    strictPort: true, // (Opcional) Evita que Vite busque un puerto alternativo
  },
})
