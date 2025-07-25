// eslint.config.js
import globals from 'globals';
import pluginJs from '@eslint/js';

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
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            'brace-style': ['error', '1tbs', { allowSingleLine: false }],
            indent: ['error', 4],
            'spaced-comment': ['error', 'always'],
            'no-multiple-empty-lines': ['error', { max: 1 }],
            'eol-last': ['error', 'always'],
            'object-curly-spacing': ['error', 'always'],
            'arrow-parens': ['error', 'as-needed'],
            'quote-props': ['error', 'as-needed'],
            'space-before-function-paren': ['error', 'never'],
            'space-before-blocks': ['error', 'always'],
            'no-trailing-spaces': 'error',
        },
    },
];
