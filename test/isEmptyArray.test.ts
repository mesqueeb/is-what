import test from 'node:test'
import assert from 'node:assert'
import isEmptyArray from '../src/isEmptyArray'

test('works with empty arrays', () => {
  assert.equal(isEmptyArray([]), true)
  assert.equal(isEmptyArray(new Array()), true)
})

test('false with non-empty arrays', () => {
  assert.equal(isEmptyArray([1]), false)
  assert.equal(isEmptyArray(new Array(1)), false)
})

test('false with non-arrays', () => {
  assert.equal(isEmptyArray({}), false)
  assert.equal(isEmptyArray(new EventTarget()), false)
  assert.equal(isEmptyArray(new Map()), false)
})

test('false with primitives', () => {
  assert.equal(isEmptyArray('hi'), false)
  assert.equal(isEmptyArray(1), false)
  assert.equal(isEmptyArray(true), false)
  assert.equal(isEmptyArray(Symbol('a')), false)
  assert.equal(isEmptyArray(null), false)
  assert.equal(isEmptyArray(undefined), false)
})

test('false when Object.create(Array.prototype)', () => {
  assert.equal(isEmptyArray(Object.create(Array.prototype)), false)
})

test('true for subclasses', () => {
  class MyArray extends Array {}
  assert.equal(isEmptyArray(new MyArray()), true)
})
