module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.ts',
      'dist/**/*.js'
    ],
    tests: [
      'test/**/*.js'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    compilers: {
      '+(dist|test)/**/*.js': wallaby.compilers.typeScript(),
      '+(src)/**/*.ts': wallaby.compilers.typeScript()
      // '+(src|test)/**/*.js': wallaby.compilers.babel(
        // {
        //   presets: ['@babel/preset-env', '@ava/babel-preset-stage-4']
        // }
      // )
    },
    testFramework: 'jest',
    debug: true
  }
}