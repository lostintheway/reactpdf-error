import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import reactRefresh from "@vitejs/plugin-react-refresh";
import shimReactPdf from "vite-plugin-shim-react-pdf";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), shimReactPdf()],
  css: {
    preprocessorOptions: {
      less: { javascriptEnabled: true },
    },
  },
  publicDir: "public",
  server: {
    port: 3284,
    fs: {
      // Allow serving files from one level up to the project root
      allow: [".."],
    },
  },
  build: {
    outDir: "build",
    sourcemap: false,
  },
});
