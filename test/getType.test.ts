import test from 'node:test'
import assert from 'node:assert'
import getType from '../src/getType.js'

test('works regular objects', () => {
  assert.equal(getType({}), 'Object')
  assert.equal(getType(new Object()), 'Object')
  assert.equal(getType(Object.create(null)), 'Object')
  assert.equal(getType(Object.create(Object.prototype)), 'Object')
  assert.equal(getType(Object.create({})), 'Object')
  assert.equal(getType({ a: 1 }), 'Object')
})

test('works with arrays', () => {
  assert.equal(getType([]), 'Array')
  assert.equal(getType(new Array()), 'Array')
  assert.equal(getType(Object.create(Array.prototype)), 'Object')
})

test('works with primitives', () => {
  assert.equal(getType(''), 'String')
  assert.equal(getType(new String()), 'String')
  assert.equal(getType(1), 'Number')
  assert.equal(getType(new Number()), 'Number')
  assert.equal(getType(true), 'Boolean')
  assert.equal(getType(new Boolean()), 'Boolean')
  assert.equal(getType(Symbol()), 'Symbol')
  assert.equal(getType(BigInt(1)), 'BigInt')
})

test('works with oddballs', () => {
  assert.equal(getType(null), 'Null')
  assert.equal(getType(undefined), 'Undefined')
})

test('works with functions', () => {
  assert.equal(
    getType(() => {}),
    'Function'
  )
  assert.equal(
    getType(function () {}),
    'Function'
  )
  assert.equal(
    getType(function* () {}),
    'GeneratorFunction'
  )
})

test('works with user-defined types', () => {
  class C {
    get [Symbol.toStringTag]() {
      return 'C'
    }
  }
  assert.equal(getType(new C()), 'C')

  class D {}
  assert.equal(getType(new D()), 'Object')

  class E {
    toString() {
      return 'Hello!'
    }
  }
  assert.equal(getType(new E()), 'Object')
})

test('works with native types', () => {
  assert.equal(getType(new Date()), 'Date')
  assert.equal(getType(/hi/), 'RegExp')
  assert.equal(getType(new Blob()), 'Blob')
  assert.equal(getType(new EventTarget()), 'EventTarget')
})

test('works with cross-realm types', () => {
  console.log('TODO: test cross-realm types')
})
