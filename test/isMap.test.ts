import test from 'node:test'
import assert from 'node:assert'
import isMap from '../src/isMap.js'

test('works with maps', () => {
  assert.equal(isMap(new Map()), true)
  assert.equal(isMap(new Map([['a', 1]])), true)
})

test('false with non-maps', () => {
  assert.equal(isMap({}), false)
  assert.equal(isMap([]), false)
  assert.equal(isMap(new EventTarget()), false)
  assert.equal(isMap(Object.create(null)), false)
})

test('false when Object.create(Map.prototype)', () => {
  assert.equal(isMap(Object.create(Map.prototype)), false)
})

test('false with primitives', () => {
  assert.equal(isMap('hi'), false)
  assert.equal(isMap(1), false)
  assert.equal(isMap(true), false)
  assert.equal(isMap(Symbol('a')), false)
  assert.equal(isMap(null), false)
  assert.equal(isMap(undefined), false)
})

test('true when prototype changed after construction', () => {
  assert.equal(isMap(Object.setPrototypeOf(new Map(), null)), true)
})
