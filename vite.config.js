import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    minify: 'esbuild', // default: terserah terserah esbuild, tapi kita paksa
    target: 'esnext',
    cssMinify: true,
    chunkSizeWarningLimit: 600, // biar gak banyak warning
  },
})
