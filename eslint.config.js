import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,  // добавляет console, alert, prompt и т.д.
        ...globals.node,     // добавляет module, require, process и т.д.
      },
    },
    rules: {
      // Отключаем строгие стилевые правила
      '@stylistic/semi': 'off',
      '@stylistic/indent': 'off', 
      '@stylistic/brace-style': 'off',
      '@stylistic/object-curly-spacing': 'off',
      '@stylistic/arrow-parens': 'off',
      '@stylistic/no-multiple-empty-lines': 'off',
      
      // Базовые правила
      'no-console': 'off',
      'no-unused-vars': 'warn',
    },
  },
];
