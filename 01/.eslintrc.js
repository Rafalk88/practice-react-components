module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'eslint:recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-curly-spacing': [
      'warn',
      'never',
      {
        // eslint-disable-next-line quote-props
        'allowMultiline': true
      }
    ],
    'react/jsx-curly-brace-presence': [
      'warn',
      {
        // eslint-disable-next-line quote-props
        'props': 'always',
        // eslint-disable-next-line quote-props
        'children': 'never'
      }
    ],
    'react/jsx-max-props-per-line': [
      'warn'
    ],
    'react/jsx-indent': [
      'warn',
      2
    ],
    'react/jsx-indent-props': [
      'warn',
      2
    ],
    'react/jsx-closing-tag-location': [
      'warn'
    ],
    'react/jsx-closing-bracket-location': [
      'warn'
    ],
    'react/jsx-first-prop-new-line': [
      'warn',
      'multiline'
    ]
  }
}
