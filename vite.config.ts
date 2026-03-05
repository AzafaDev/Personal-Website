import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const cssInjectedByJsPlugin = require("vite-plugin-css-injected-by-js");

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    typeof cssInjectedByJsPlugin === 'function' 
      ? cssInjectedByJsPlugin() 
      : cssInjectedByJsPlugin.default()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "framer-motion", "lucide-react"],
        },
      },
    },
  },
});