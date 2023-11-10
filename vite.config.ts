/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname + '/src/assets'),
      components: path.resolve(__dirname + '/src/components'),
      contexts: path.resolve(__dirname + '/src/contexts'),
      hooks: path.resolve(__dirname + '/src/hooks'),
      store: path.resolve(__dirname + '/src/store'),
      styles: path.resolve(__dirname + '/src/styles'),
      utils: path.resolve(__dirname + '/src/utils')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
    css: false
  }
});
