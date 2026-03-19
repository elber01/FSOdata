import js from '@eslint/js'
import globals from "globals";
import stylistic from '@stylistic/eslint-plugin'
import { defineConfig , globalIgnores } from "eslint/config";

export default defineConfig([
  {languageOptions: { 
    globals: {
      ...globalas.node,
      ...globals.browser,
    parseOptions:{
      ecmaVersion: 'lastest',
      sourceType: 'module',
    } }}},
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node },
    plugins: { js, stylistic },
    extends: ["js/recommended"] },
    globalIgnores (['./dist/']),
    { 'rules': {
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
    }, }
]);

