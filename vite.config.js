import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Esta es la línea que agregamos para el despliegue
  base: 'AIRBNB-CLONE', 
  plugins: [
    tailwindcss(),
  ],
})