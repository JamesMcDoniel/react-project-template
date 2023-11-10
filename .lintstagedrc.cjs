module.exports = {
  '*.{ts,tsx}': ['eslint --fix', 'stylelint --fix'],
  '*': 'prettier --ignore-unknown --write'
};
