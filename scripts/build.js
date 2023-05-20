/* eslint-disable */

// npm i -D rollup rollup-plugin-typescript2 typescript
import typescript from 'rollup-plugin-typescript2'

const pkg = require('../package.json')

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.exports['.'].require.default, format: 'cjs' },
    { file: pkg.exports['.'].import.default, format: 'esm' },
  ],
  plugins: [typescript({ tsconfigOverride: { exclude: ['test/**/*'] } })],
  external: Object.keys(pkg.dependencies || []),
}
