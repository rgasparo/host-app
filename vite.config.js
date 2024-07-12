// vite.config.js in host-app
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import dotenv from 'dotenv';
dotenv.config();


export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        todo_components: process.env.VITE_TODO_COMPONENTS_URL,
      },
      shared: ["react"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",

    minify: false,
    cssCodeSplit: false,
  },
});