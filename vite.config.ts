import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react";

const resolveRelativePath = (relativePath: string) =>
  path.resolve(__dirname, relativePath);

export default defineConfig({
  root: "./src",
  plugins: [react()],
  build: {
    outDir: "../dist",
  },
  resolve: {
    alias: {
      "@components": resolveRelativePath("./src/components"),
      "@constants": resolveRelativePath("./src/constants"),
      "@hooks": resolveRelativePath("./src/hooks"),
      "@utils": resolveRelativePath("./src/utils"),
      "@types": resolveRelativePath("./src/types"),
    },
  },
});
