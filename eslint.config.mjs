import { FlatCompat } from '@eslint/eslintrc';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the directory of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a compatibility object for ESLint configuration
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESLint configuration
const eslintConfig = [
  { files: ['*/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
    'plugin:react/recommended'
  ),
  {
    plugins: {
      prettier: eslintPluginPrettier,
      '@typescript-eslint': tsEslintPlugin,
      import: eslintPluginImport,
    },
    rules: {
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'no-console': ['warn'],
      'no-unused-vars': ['warn'],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            ['sibling', 'parent'],
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];

export default eslintConfig;
