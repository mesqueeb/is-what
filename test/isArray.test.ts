import test from 'node:test'
import assert from 'node:assert'
import isArray from '../src/isArray'

test('works with arrays', () => {
  assert.equal(isArray([]), true)
  assert.equal(isArray(new Array()), true)
})

test('works with non-arrays', () => {
  assert.equal(isArray({}), false)
  assert.equal(isArray(new EventTarget()), false)
  assert.equal(isArray(new Map()), false)
})

test('works with primitives', () => {
  assert.equal(isArray('hi'), false)
  assert.equal(isArray(1), false)
  assert.equal(isArray(true), false)
  assert.equal(isArray(Symbol('a')), false)
  assert.equal(isArray(null), false)
  assert.equal(isArray(undefined), false)
})

test('works when prototype mutated after construction', () => {
  const x = []
  Object.setPrototypeOf(x, null)
  assert.equal(isArray(x), true)
})

test('false when using Object.create(Array.prototype)', () => {
  assert.equal(isArray(Object.create(Array.prototype)), false)
})

test('true for subclasses', () => {
  class MyArray extends Array {}
  assert.equal(isArray(new MyArray()), true)
})

test('false for array-like objects', () => {
  const argumentsObject = (function () {
    return arguments
  })()
  assert.equal(isArray(argumentsObject), false)

  assert.equal(isArray({ length: 0 }), false)
})
