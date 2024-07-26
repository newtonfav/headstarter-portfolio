import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import terser from "@rollup/plugin-terser";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    terser({
      compress: {
        drop_console: true, // Remove console.logs
      },
    }),
  ],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
});
