import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "test", // tells Vite to serve from test folder
  server: {
    port: 5173,
  },
});
