import { defineConfig } from "rolldown";
import clear from "rollup-plugin-clear";
import replace from "@rollup/plugin-replace";
import progress from "rollup-plugin-progress";
import vue from "@vitejs/plugin-vue";
import copy from "rollup-plugin-copy";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

export default defineConfig([
  {
    input: "src/main.js",
    output: {
      dir: "dist",
      // format: "esm",
      sourcemap: true,
      advancedChunks: {
        groups: [
          {
            name: "vue",
          },
        ],
      },
    },
    plugins: [
      vue(),
      clear({
        targets: ["dist"],
      }),
      replace({
        FOO: JSON.stringify("我是注入的变量"),
      }),
      copy({
        targets: [{ src: "public/**", dest: "dist" }],
      }),
      progress(),
      // 热加载
      livereload(),
      // 本地服务
      serve({
        contentBase: "dist",
        port: 4576,
        open: true
      }),
    ],
  },
]);
