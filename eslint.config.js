// ESLint 10 flat config, migrated from src/.eslintrc.js
const babelParser = require('@babel/eslint-parser');
const react = require('eslint-plugin-react');
const globals = require('globals');

module.exports = [
    {
        ignores: ['dist/**', 'node_modules/**', '.scripts/**'],
    },
    {
        files: ['src/**/*.js', 'src/**/*.jsx'],
        languageOptions: {
            parser: babelParser,
            ecmaVersion: 2018,
            sourceType: 'module',
            parserOptions: {
                requireConfigFile: false,
                ecmaFeatures: { jsx: true },
            },
            globals: {
                ...globals.browser,
            },
        },
        plugins: {
            react,
        },
        settings: {
            react: {
                version: '16.13.1', // we use Preact actually...
            },
        },
        rules: {
            // core rules carried over from the legacy config
            'eqeqeq': 'error',
            'indent': ['error', 4, { 'SwitchCase': 1 }],
            'linebreak-style': ['error', 'unix'],
            'no-alert': 'error',
            'no-confusing-arrow': 'error',
            'no-console': ['error', { allow: ['warn', 'error'] }],
            'no-implied-eval': 'error',
            'no-labels': 'error',
            'no-lone-blocks': 'error',
            'no-new': 'error',
            'no-new-func': 'error',
            'no-new-wrappers': 'error',
            'no-throw-literal': 'error',
            'no-trailing-spaces': 'error',
            'no-var': 'error',
            'prefer-const': 'error',
            'yoda': 'error',
            'eol-last': ['error', 'always'],
            // react rules from plugin:react/recommended + local additions
            ...react.configs.recommended.rules,
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'react/prop-types': 0,
            'react/default-props-match-prop-types': 'error',
            'react/forbid-foreign-prop-types': 'error',
            'react/no-unused-prop-types': 'error',
            'react/sort-prop-types': ['error', { callbacksLast: true }],
            'react/no-string-refs': 'warn',
        },
    },
];
