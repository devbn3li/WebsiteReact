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
    chunkSizeWarningLimit: 1000, // Adjust the chunk size warning limit (value is in KB)
    rollupOptions: {
      output: {
        // Use manualChunks to split vendor code into separate chunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // split vendor code into its standalone chunk
          }
        },
      },
    },
  },
   server: {
    host: true,
  },
});

