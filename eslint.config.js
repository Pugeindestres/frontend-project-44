import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"],
    env: {
      node: true,      // <-- добавляем Node.js среду
      browser: true,   // если нужен браузер, иначе можно убрать
      es2021: true,
    },
  },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser,} },
]);
