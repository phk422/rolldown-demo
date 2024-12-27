import { defineConfig } from "rolldown";

export default defineConfig([
  {
    input: 'src/index.js',
    output: {
      format: "esm"
    }
  },
  {
    input: 'src/index.js',
    output: {
      format: "iife",
      dir: 'dist/iife',
    }
  },
  {
    input: 'src/index.js',
    output: {
      format: "cjs",
      dir: 'dist/cjs',
    }
  }
])