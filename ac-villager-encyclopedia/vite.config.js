// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
    plugins: [react()],
    test: {
      environment: 'jsdom', 
      globals: true,        
      setupFiles: ['./src/setupTests.js'],
  },
});