import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettier,

  // ignore list
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  // eslint for src/
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      // TypeScript
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',

      // Node
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'prefer-const': 'error',
      'no-process-exit': 'error',
    },
  },

  // eslint for scripts/
  {
    files: ['scripts/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.scripts.json',
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      // TypeScript
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',

      // Node
      'no-console': 'off', // scripts can use console freely
      'prefer-const': 'error',
      'no-process-exit': 'error',
    },
  },
);
