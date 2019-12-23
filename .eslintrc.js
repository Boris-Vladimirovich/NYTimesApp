module.exports = {
  root: true,
  extends: [
    'webbylab',
    'plugin:jest/recommended'
  ],
  env: {
    'jest/globals': true
  },
  plugins: [
    'jest'
  ],
  rules : {
    camelcase : ['error', { allow: [ 'num_results', 'published_date' ] }],
    'no-param-reassign': ['error', { 'ignorePropertyModificationsFor': ['draft'] } ],
    'react/sort-comp'  : [
      2,
      { order: [
        'static-variables',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ]}
    ]
  }
};
