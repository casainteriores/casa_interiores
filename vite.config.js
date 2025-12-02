// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        sobre: 'sobre.html',
        contato: 'contato.html',
        politica: 'politica-e-privacidade.html',
      },
    },
  },
});
