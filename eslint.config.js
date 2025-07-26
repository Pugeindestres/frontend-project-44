import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      js: pluginJs,
    },
    rules: {
      "no-console": "off",
      "import/extensions": "off",
    },
  },
];
