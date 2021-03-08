/* eslint-disable */

// npm i -D rollup rollup-plugin-typescript2 typescript
import typescript from 'rollup-plugin-typescript2'

// ------------------------------------------------------------------------------------------
// formats
// ------------------------------------------------------------------------------------------
// amd – Asynchronous Module Definition, used with module loaders like RequireJS
// cjs – CommonJS, suitable for Node and Browserify/Webpack
// esm – Keep the bundle as an ES module file
// iife – A self-executing function, suitable for inclusion as a <script> tag. (If you want to create a bundle for your application, you probably want to use this, because it leads to smaller file sizes.)
// umd – Universal Module Definition, works as amd, cjs and iife all in one
// system – Native format of the SystemJS loader

// ------------------------------------------------------------------------------------------
// setup
// ------------------------------------------------------------------------------------------
const pkg = require('./package.json')
const name = pkg.name
const className = name.replace(/(^\w|-\w)/g, (c) => c.replace('-', '').toUpperCase())

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: false,
        name: className,
        exports: 'named',
      },
    ],
    plugins: [
      typescript({ useTsconfigDeclarationDir: true, tsconfigOverride: { exclude: ['test/**/*'] } }),
    ],
    external: Object.keys(pkg.dependencies || []),
  },
]
