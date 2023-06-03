import test from 'node:test'
import assert from 'node:assert'
import isEmptyObject from '../src/isEmptyObject'

test('works with empty objects', () => {
  assert.equal(isEmptyObject({}), true)
})

test('false with non-empty objects', () => {
  assert.equal(isEmptyObject({ a: 1 }), false)
  assert.equal(isEmptyObject({ [Symbol('a')]: 1 }), false)
})

test('false when Object.create(null)', () => {
  assert.equal(isEmptyObject(Object.create(null)), false)
})

test('false with non-plain objects', () => {
  assert.equal(isEmptyObject([]), false)
  assert.equal(isEmptyObject(new EventTarget()), false)
  assert.equal(isEmptyObject(new Map()), false)
})

test('false with primitives', () => {
  assert.equal(isEmptyObject('hi'), false)
  assert.equal(isEmptyObject(1), false)
  assert.equal(isEmptyObject(true), false)
  assert.equal(isEmptyObject(Symbol('a')), false)
  assert.equal(isEmptyObject(null), false)
  assert.equal(isEmptyObject(undefined), false)
})
