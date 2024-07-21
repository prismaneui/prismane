import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true, skipDiagnostics: true }), react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "prismane",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "../src"),
      "@components": resolve(__dirname, "../src/components"),
      "@hooks": resolve(__dirname, "../src/hooks"),
      "@themes": resolve(__dirname, "../src/themes"),
      "@validators": resolve(__dirname, "../src/validators"),
    },
  },
});
