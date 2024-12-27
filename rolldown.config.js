import { defineConfig } from "rolldown";
import clear from "rollup-plugin-clear";

export default defineConfig([
  {
    input: 'src/index.js',
    output: {
      format: "iife",
    },
    plugins: [
      clear({
        targets: ['dist']
      })
    ]
  }
])