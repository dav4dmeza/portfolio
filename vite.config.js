import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: 'https://dav4dmeza.github.io/portfolio',
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
})
