import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2021,
      sourceType: "module",
    },
    env: {
      node: true,
      es2021: true,
      browser: true,
    },
    extends: [
      "airbnb",
    ],
    rules: {
      // здесь ваши правила, например:
      // "no-console": "off",
    },
  },
]);
