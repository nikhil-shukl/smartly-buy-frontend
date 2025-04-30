// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/smartly-buy-frontend/', // ✅ MATCH karo repo/project name se
});
