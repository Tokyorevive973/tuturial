import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/tuturial/',  // FONTOS: GitHub Pages repo neve
});
