import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // CORRECCIÓN PARA GITHUB PAGES: Apunta directamente al nombre de tu repositorio
  base: '/AIRBNB-CLONE/', 
  plugins: [
    tailwindcss(),
  ],
});