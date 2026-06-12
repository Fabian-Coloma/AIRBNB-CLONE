import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Ruta relativa universal para que busque en la carpeta donde caiga el deploy
  base: './', 
  plugins: [
    tailwindcss(),
  ],
});