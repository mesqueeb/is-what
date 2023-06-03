import test from 'node:test'
import assert from 'node:assert'
import isFunction from '../src/isFunction'

test('works with functions', () => {
  assert.equal(
    isFunction(() => {}),
    true
  )
  assert.equal(
    isFunction(function () {}),
    true
  )
  assert.equal(
    isFunction(function* () {}),
    true
  )
  assert.equal(
    isFunction(async function () {}),
    true
  )
})

test('works with classes', () => {
  assert.equal(isFunction(class {}), true)
})

test('false with primitives', () => {
  assert.equal(isFunction('hi'), false)
  assert.equal(isFunction(1), false)
  assert.equal(isFunction(true), false)
  assert.equal(isFunction(Symbol('a')), false)
  assert.equal(isFunction(null), false)
  assert.equal(isFunction(undefined), false)
  assert.equal(isFunction({}), false)
})

test('false when Object.create(Function.prototype)', () => {
  assert.equal(isFunction(Object.create(Function.prototype)), false)
})

test('true when called with Function.prototype', () => {
  assert.equal(isFunction(Function.prototype), true)
})
