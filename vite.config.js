/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@aliasapp': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'build',
  },
  define: {
    'process.env': {},
  },
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
    cors: true,
  },
})
