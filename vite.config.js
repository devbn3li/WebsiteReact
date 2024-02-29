import million from "million/compiler";
import react from "@vitejs/plugin-react";
import dotenv from 'dotenv';
import { defineConfig } from "vite";
 

// run package config
dotenv.config();
export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  define: {'process.env': process.env},
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/lodash')) {
            return 'lodash'; // separates lodash into its own chunk
          }
        }
      }
    },
    chunkSizeWarningLimit: 500, // Increase or decrease as per your requirement
  },
});

