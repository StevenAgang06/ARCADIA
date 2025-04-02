import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/arcadia": {
        target: "http://localhost:5100/arcadia",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/arcadia/, ""),
      },
    },
  },
});
