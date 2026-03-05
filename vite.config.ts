import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/", // Root path
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false, // Biar build lebih enteng
    rollupOptions: {
      output: {
        // Jangan manual chunks dulu, biarin Vite yang nentuin hash-nya
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`
      }
    }
  }
});