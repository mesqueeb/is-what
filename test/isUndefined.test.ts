import test from 'node:test'
import assert from 'node:assert'
import isUndefined from '../src/isUndefined.js'

test('true with undefined', () => {
  assert.equal(isUndefined(undefined), true)
})

test('false with other values', () => {
  assert.equal(isUndefined(null), false)
  assert.equal(isUndefined(''), false)
  assert.equal(isUndefined(0), false)
  assert.equal(isUndefined(false), false)
})

test('false with objects', () => {
  assert.equal(isUndefined({}), false)
  assert.equal(isUndefined({ a: 1 }), false)
  assert.equal(isUndefined({ [Symbol('a')]: 1 }), false)
})

test('false with arrays', () => {
  assert.equal(isUndefined([]), false)
  assert.equal(isUndefined([1]), false)
})
