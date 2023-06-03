import test from 'node:test'
import assert from 'node:assert'
import isWeakSet from '../src/isWeakSet.js'

test('true with WeakSet', () => {
  assert.equal(isWeakSet(new WeakSet()), true)
})

test('true when prototype changed after construction', () => {
  assert.equal(isWeakSet(Object.setPrototypeOf(new WeakSet(), null)), true)
})

test('false with other objects', () => {
  assert.equal(isWeakSet({}), false)
  assert.equal(isWeakSet({ a: 1 }), false)
  assert.equal(isWeakSet({ [Symbol('a')]: 1 }), false)
  assert.equal(isWeakSet([]), false)
  assert.equal(isWeakSet(new Map()), false)
  assert.equal(isWeakSet(new Set()), false)
  assert.equal(isWeakSet(new WeakMap()), false)
})

test('false with custom weak map class', () => {
  class WeakSet {
    get [Symbol.toStringTag]() {
      return 'WeakSet'
    }
  }
  assert.equal(isWeakSet(new WeakSet()), false)
})

test('false with primitives', () => {
  assert.equal(isWeakSet('hi'), false)
  assert.equal(isWeakSet(1), false)
  assert.equal(isWeakSet(true), false)
  assert.equal(isWeakSet(Symbol('a')), false)
  assert.equal(isWeakSet(null), false)
  assert.equal(isWeakSet(undefined), false)
})
