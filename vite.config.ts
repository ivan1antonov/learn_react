import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Определение __dirname для ES-модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // CSS файлы в корне
        assetFileNames: ({ name }) => {
          if (name && /\.(css)$/.test(name)) {
            return '[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        // JS файлы в корне
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
      },
    },
  },
  define: {
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
  },
  server: {
    port: 3001,
  },
});
