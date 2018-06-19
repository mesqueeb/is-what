// ------------------------------------------------------------------------------------------
// setup
// ------------------------------------------------------------------------------------------
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

const pkg = require('../package.json')
const name = 'index'
const className = name.replace(/(^\w|-\w)/g, c => c.replace('-', '').toUpperCase())

function output (ext, format = 'umd') {
  return {
    name: className,
    file: `dist/${name}.${ext}`,
    format: format,
    sourcemap: true,
    exports: 'named'
  }
}

// ------------------------------------------------------------------------------------------
// build
// ------------------------------------------------------------------------------------------
const umd = {
  input: 'src/index.js',
  output: output('js'),
  plugins: [
    babel(),
    commonjs()
  ]
}

const min = Object.assign({}, umd, {
  output: output('min.js'),
  plugins: [...umd.plugins, uglify()]
})

export default [umd, min]
