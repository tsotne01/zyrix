import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/pages': path.resolve(__dirname, './src/page'),
      '@/shared': path.resolve(__dirname, './src/shared'),
      '@/ui': path.resolve(__dirname, './src/shared/ui'),
    },
  },
})
