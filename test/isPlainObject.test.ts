import test from 'node:test'
import assert from 'node:assert'
import isPlainObject from '../src/isPlainObject'

test('true with plain objects', () => {
  assert.equal(isPlainObject({}), true)
  assert.equal(isPlainObject({ a: 1 }), true)
  assert.equal(isPlainObject({ constructor: 1 }), true)
})

test('false with primitives', () => {
  assert.equal(isPlainObject('hi'), false)
  assert.equal(isPlainObject(1), false)
  assert.equal(isPlainObject(true), false)
  assert.equal(isPlainObject(Symbol('a')), false)
  assert.equal(isPlainObject(null), false)
  assert.equal(isPlainObject(undefined), false)
})

test('false with Object.create(null)', () => {
  assert.equal(isPlainObject(Object.create(null)), false)
})

test('works cross-realm', () => {
  console.log('TODO: Test cross-realm isPlainObject()')
})

test('false with arrays', () => {
  assert.equal(isPlainObject([]), false)
  assert.equal(isPlainObject([1, 2, 3]), false)
})

test('false with arguments object', () => {
  const argumentsObject = (function () {
    return arguments
  })()
  assert.equal(isPlainObject(argumentsObject), false)
})

test('false with functions', () => {
  assert.equal(
    isPlainObject(() => {}),
    false
  )
  assert.equal(
    isPlainObject(function () {}),
    false
  )
  assert.equal(
    isPlainObject(function* () {}),
    false
  )
})
