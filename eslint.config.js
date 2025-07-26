// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  
  pluginJs.configs.recommended, // импорт рекомендуемых правил плагина js
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
    rules: {
      "no-console": "off",
      "import/extensions": "off",
      // Добавьте свои правила здесь
    },
  },
];
