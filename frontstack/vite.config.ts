import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
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
