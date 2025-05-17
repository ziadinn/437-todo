import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from 'tailwindcss' // Removed as PostCSS will handle it
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
}) 