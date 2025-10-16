import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  // Global ignores
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**'],
  },

  // Base configuration
  js.configs.recommended,

  // TypeScript configuration
  ...tseslint.configs.recommended,

  // Main configuration for all files
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2024,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Airbnb-style rules
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': 'off', // Handled by TypeScript
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'template-curly-spacing': ['error', 'never'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'eol-last': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'never'],
      indent: ['error', 2],
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'computed-property-spacing': ['error', 'never'],

      // React specific rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // TypeScript specific rules (basic ones that don't require type info)
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      // Prettier integration
      'prettier/prettier': 'error',
    },
  },

  // TypeScript files with type-aware rules (only for src files)
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.app.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Type-aware rules
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    },
  },

  // Config files (exclude from type checking but apply basic rules)
  {
    files: ['*.config.{ts,js}', 'eslint.config.js'],
    rules: {
      // Disable type-aware rules for config files
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/prefer-optional-chain': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    },
  },

  // Prettier config (disables conflicting rules)
  prettierConfig,
]
