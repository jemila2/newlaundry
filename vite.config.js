// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.NODE_ENV === 'production' ? '/' : '/', // Remove '/newlaundry/'
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  preview: {
    port: 4173, // Use different port for preview
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})

