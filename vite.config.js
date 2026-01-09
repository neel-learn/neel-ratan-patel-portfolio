import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/neel-ratan-patel-portfolio/", // This must be your exact GitHub repository name
})
