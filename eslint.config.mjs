import eslintJs from '@eslint/js';
import eslintTs from 'typescript-eslint';
export default [
  eslintJs.configs.recommended,
  ...eslintTs.configs.recommended,
  {
    ignores: [
      "**/cleanScript.js",
      "**/dist/",
      "**/node_modules/",
      "*.js"
    ]
  },
  {
    rules: {
      "no-multiple-empty-lines": ["error", { "max": 0, "maxEOF": 0 }],
      "no-unused-vars": "error",
      "no-explicit-any": "off"
    }
  },
];
