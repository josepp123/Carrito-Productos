import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Simula un entorno de navegador para pruebas
    globals: true,        // Habilita funciones globales como describe, test, expect
    setupFiles: './setupTests.js', // Archivo de configuración adicional
  },
});