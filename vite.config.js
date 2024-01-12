import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  appType: "spa",
  server: {
    host: true,
    proxy: {
      '/socket.io': {
        target: 'http://127.0.0.1:5000 ' ,  // Replace with your Flask server URL
        ws: true,
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
  base: "/",
});
