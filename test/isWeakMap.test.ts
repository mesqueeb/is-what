import test from 'node:test'
import assert from 'node:assert'
import isWeakMap from '../src/isWeakMap.js'

test('true with WeakMap', () => {
  assert.equal(isWeakMap(new WeakMap()), true)
})

test('true when prototype changed after construction', () => {
  assert.equal(isWeakMap(Object.setPrototypeOf(new WeakMap(), null)), true)
})

test('false with other objects', () => {
  assert.equal(isWeakMap({}), false)
  assert.equal(isWeakMap({ a: 1 }), false)
  assert.equal(isWeakMap({ [Symbol('a')]: 1 }), false)
  assert.equal(isWeakMap([]), false)
  assert.equal(isWeakMap(new Map()), false)
  assert.equal(isWeakMap(new Set()), false)
  assert.equal(isWeakMap(new WeakSet()), false)
})

test('false with custom weak map class', () => {
  class WeakMap {
    get [Symbol.toStringTag]() {
      return 'WeakMap'
    }
  }
  assert.equal(isWeakMap(new WeakMap()), false)
})

test('false with primitives', () => {
  assert.equal(isWeakMap('hi'), false)
  assert.equal(isWeakMap(1), false)
  assert.equal(isWeakMap(true), false)
  assert.equal(isWeakMap(Symbol('a')), false)
  assert.equal(isWeakMap(null), false)
  assert.equal(isWeakMap(undefined), false)
})
