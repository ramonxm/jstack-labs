import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "@views": path.resolve(__dirname, "src", "views"),
      "@app": path.resolve(__dirname, "src", "app"),
    },
  },
});
