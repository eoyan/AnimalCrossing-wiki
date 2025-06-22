// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://api.nookipedia.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''), // /api/villagers → /villagers
      },
    },
  },
});