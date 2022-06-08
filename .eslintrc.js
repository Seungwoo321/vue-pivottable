module.exports = {
 root: true,
 env: {
  node: true
 },
 parserOptions: {
  parser: '@babel/eslint-parser'
 },
 extends: [
  'plugin:vue/essential',
  '@vue/standard',
  'prettier',
  'plugin:prettier/recommended',
  'plugin:mdx/recommended'
 ],
 settings: {
  'mdx/code-blocks': true
 },
 rules: {
  'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
 }
}
