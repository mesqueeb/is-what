import test from 'node:test'
import assert from 'node:assert'
import isNullOrUndefined from '../src/isNullOrUndefined.js'

test('works with null', () => {
  assert.equal(isNullOrUndefined(null), true)
})

test('works with undefined', () => {
  assert.equal(isNullOrUndefined(undefined), true)
})

test('false with anything else', () => {
  assert.equal(isNullOrUndefined(1), false)
  assert.equal(isNullOrUndefined(true), false)
  assert.equal(isNullOrUndefined(false), false)
  assert.equal(isNullOrUndefined(Symbol('a')), false)
  assert.equal(isNullOrUndefined({}), false)
  assert.equal(isNullOrUndefined([]), false)
  assert.equal(isNullOrUndefined('hi'), false)
  assert.equal(isNullOrUndefined(new String('')), false)
})
