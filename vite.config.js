import million from "million/compiler";
import react from "@vitejs/plugin-react";
import dotenv from 'dotenv';
import { defineConfig } from "vite";
 

// run package config
dotenv.config();
export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  define: {'process.env': process.env}
});