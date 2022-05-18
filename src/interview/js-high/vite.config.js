import { defineConfig } from 'vite';
import path from 'path';
const pathSrc = path.resolve(__dirname, 'src');

export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
});
