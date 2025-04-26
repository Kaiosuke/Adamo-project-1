import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['dist/**', 'node_modules/**'],
    languageOptions: {
      globals: globals.browser
    },
    plugins: {
      js,
      react: pluginReact
    },
    extends: [
      'js/recommended',
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      pluginReact.configs.flat.recommended
    ],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 0,
      'react/display-name': 0,
      'react/react-in-jsx-scope': 'off',

      'no-console': 1,
      'no-lonely-if': 1,
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-trailing-spaces': 1,
      'no-multi-spaces': 1,
      'no-multiple-empty-lines': 1,
      'space-before-blocks': ['error', 'always'],
      'object-curly-spacing': [1, 'always'],
      indent: ['warn', 2],
      semi: [1, 'never'],
      quotes: ['error', 'single'],
      'array-bracket-spacing': 1,
      'linebreak-style': 0,
      'no-unexpected-multiline': 'warn',
      'keyword-spacing': 1,
      'comma-dangle': 0,
      'comma-spacing': 1
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
])
