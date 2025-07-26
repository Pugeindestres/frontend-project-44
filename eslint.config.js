// eslint.config.js
import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
  
  pluginJs.configs.recommended, // импорт рекомендуемых правил плагина js
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      semi: ['error', 'never'], // запрет точек с запятой
      quotes: ['error', 'single'], // одинарные кавычки
      'brace-style': ['error', '1tbs', { allowSingleLine: false }],
      indent: ['error', 2],
      'spaced-comment': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'eol-last': ['error', 'always'],
            
      'object-curly-spacing': ['error', 'always'],
      'arrow-parens': ['error', 'as-needed'],
      'quote-props': ['error', 'as-needed'],
      'space-before-function-paren': ['error', 'never'],
      'space-before-blocks': ['error', 'always'],
    },
  },
]
