/* eslint-disable */

// npm i -D rollup rollup-plugin-typescript2 typescript
import typescript from 'rollup-plugin-typescript2'
import pkg from '../package.json' assert { type: 'json' }
import fs from 'fs'

function renameCjsTypeDeclaration() {
  return {
    name: 'renameCjsTypeDeclaration',
    writeBundle: {
      sequential: true,
      order: 'post',
      handler({ dir, format }) {
        if (format === 'cjs') {
          fs.rename('dist/cjs/index.d.ts', 'dist/cjs/index.d.cts', console.error)
        }
      },
    },
  }
}

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.exports['.'].import.default, format: 'esm' },
    { file: pkg.exports['.'].require.default, format: 'cjs' },
  ],
  external: Object.keys(pkg.dependencies || []),
  plugins: [
    typescript({ tsconfigOverride: { exclude: ['test/**/*'] } }),
    renameCjsTypeDeclaration(),
  ],
}
