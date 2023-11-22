import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@constants": path.resolve(__dirname, "./src/constants/index.ts"),
      "@utils": path.resolve(__dirname, "./src/utils/index.ts"),
      "@interface": path.resolve(__dirname, "./src/interface/index.ts"),
      "@feature": path.resolve(__dirname, "./src/feature/index.ts"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
