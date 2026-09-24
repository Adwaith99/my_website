import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative assets work on custom domains and /repository-name/ GitHub Pages URLs.
  base: './',
  plugins: [react()],
})
