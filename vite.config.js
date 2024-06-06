import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgrPlugin({ icon: true })],
  build: {
    outDir: "build",
  },
  server: {
    port: 5173,
    // open: true, // this will open directly to your browser
  },
});
