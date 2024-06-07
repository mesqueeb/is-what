import config from '@cycraft/eslint/config'

export default [
  ...config,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
]
