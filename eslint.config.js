import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    rules: {
      // Пример: включить правило для точек с запятой (требовать или запрещать)
      "semi": ["error", "never"], // если хотите запретить точки с запятой
      // или
      // "semi": ["error", "always"], // если хотите требовать точки с запятой
      // Добавьте другие правила по необходимости
    },
  },
]);