/* eslint-disable */

// npm i -D rollup rollup-plugin-typescript2 typescript
import typescript from 'rollup-plugin-typescript2'

const pkg = require('../package.json')

function emitCjsPackageScope() {
  return {
    name: 'emit-cjs-package-scope',
    generateBundle() {
      this.emitFile({
        fileName: 'package.json',
        source: JSON.stringify({ type: 'commonjs' }, null, 2) + '\n',
        type: 'asset',
      })
    },
  }
}

const createConfig = ({ output, plugins = [] }) => {
  return {
    input: 'src/index.ts',
    output,
    external: Object.keys(pkg.dependencies || []),
    plugins: [typescript({ tsconfigOverride: { exclude: ['test/**/*'] } }), ...plugins],
  }
}

export default [
  createConfig({
    output: { file: pkg.main, format: 'cjs' },
    plugins: [emitCjsPackageScope()],
  }),
  createConfig({
    output: { file: pkg.module, format: 'esm' },
  }),
]
