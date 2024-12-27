import { defineConfig } from "rolldown";
import clear from "rollup-plugin-clear";
import replace from "@rollup/plugin-replace";

export default defineConfig([
  {
    input: 'src/index.js',
    output: {
      format: "iife",
    },
    plugins: [
      clear({
        targets: ['dist']
      }),
      replace({
        "FOO": JSON.stringify("我是注入的变量")
      }),
    ]
  }
])