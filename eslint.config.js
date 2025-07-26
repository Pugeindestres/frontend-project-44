import globals from "globals";
import pluginJs from '@eslint/js';

export default ([
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
      'no-confole': 'off',
      'import/extensions': 'off',
    },
  },
]);
