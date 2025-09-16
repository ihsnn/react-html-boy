import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // base: process?.env.VITE_BASE_PATH || '/react-html-boy',
  plugins: [react()],
  base: '/htmlboy',
  server: {
    host: true, // This will expose the server to the local network
  },
})
