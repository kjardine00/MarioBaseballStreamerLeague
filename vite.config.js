import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  server: {
    // This can help with source map issues in development
    fs: {
      strict: false
    }
  },
  // Alternative: disable source maps in development to eliminate the warning
  // esbuild: {
  //   sourcemap: false
  // }
})
