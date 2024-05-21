import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const configBuild = {
  index: {
    entry: resolve(__dirname, "./src/index.ts"),
    name: "index",
    fileName: "index",
  },
  hooks: {
    entry: resolve(__dirname, "./src/hooks/index.ts"),
    name: "hooks",
    fileName: "index",
  },
  themes: {
    entry: resolve(__dirname, "./src/themes/index.ts"),
    name: "themes",
    fileName: "index",
  },
  validators: {
    entry: resolve(__dirname, "./src/validators/index.ts"),
    name: "validators",
    fileName: "index",
  },
};

const currentBuild = configBuild[process.env.ENTRY];

if (currentBuild === undefined) {
  throw new Error("ENTRY is undefined or invalid");
}

const configOutput = {
  index: "./dist",
  hooks: "./dist/hooks",
  themes: "./dist/themes",
  validators: "./dist/validators",
};

const currentOutput = configOutput[process.env.ENTRY];

if (currentOutput === undefined) {
  throw new Error("ENTRY is undefined or invalid");
}

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true, skipDiagnostics: true }), react()],
  build: {
    outDir: currentOutput,
    lib: {
      ...currentBuild,
    },
    emptyOutDir: process.env.ENTRY === "index" ? true : false,
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/components"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@themes": resolve(__dirname, "./src/themes"),
      "@validators": resolve(__dirname, "./src/validators"),
      "@types": resolve(__dirname, "./src/types"),
      "@utils": resolve(__dirname, "./src/utils"),
    },
  },
});
