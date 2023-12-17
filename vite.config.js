import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  root: "clients",
  plugins: [react()],
  build: {
    display: {
      entry: "./clients/players.jsx",
      fileName: "players.js",
    },
    players: {
      entry: "./clients/display.jsx",
      fileName: "display.js",
    },
  },
});
