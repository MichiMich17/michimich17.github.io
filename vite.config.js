import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://michimich17.github.io/wallet-app
export default defineConfig({
  base: '/',
  plugins: [react()],
})
