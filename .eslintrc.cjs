module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript','eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'vite.config.ts'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'max-len': ['error', {'code': 110} ],
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/no-array-index-key': 0,
    "jsx-a11y/media-has-caption": [ 0, {
      "audio": [ "Audio" ],
      "video": [ "Video" ],
      "track": [ "Track" ],
    }],
  },
}
