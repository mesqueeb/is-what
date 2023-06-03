import test from 'node:test'
import assert from 'node:assert'
import isFullObject from '../src/isFullObject.js'

test('works with full objects', () => {
  assert.equal(isFullObject({ a: 1 }), true)
  assert.equal(isFullObject({ [Symbol('a')]: 1 }), true)
})

test('false with empty objects', () => {
  assert.equal(isFullObject({}), false)
  assert.equal(isFullObject(Object.create(null)), false)
})

test('false when Object.create(null) with properties', () => {
  assert.equal(isFullObject(Object.assign(Object.create(null), { a: 1 })), false)
})

test('false with non-plain objects', () => {
  assert.equal(isFullObject([]), false)
  assert.equal(isFullObject(new EventTarget()), false)
  assert.equal(isFullObject(new Map()), false)
})

test('false with primitives', () => {
  assert.equal(isFullObject('hi'), false)
  assert.equal(isFullObject(1), false)
  assert.equal(isFullObject(true), false)
  assert.equal(isFullObject(Symbol('a')), false)
  assert.equal(isFullObject(null), false)
  assert.equal(isFullObject(undefined), false)
})
