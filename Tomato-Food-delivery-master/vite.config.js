import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/MERN-food-delivery-webiste/"   // 👈 this should match your repo name exactly (case-sensitive)
})
