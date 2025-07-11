import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src/client/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000', 
    },
  },
  build: {
    outDir: '../../dist',
  },
  define: {
    'process.env': {},
  },
});
