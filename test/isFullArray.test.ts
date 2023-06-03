import test from 'node:test'
import assert from 'node:assert'
import isFullArray from '../src/isFullArray.js'

test('true when array length 1+', () => {
  assert.equal(isFullArray([1, 2, 3]), true)
  assert.equal(isFullArray([undefined]), true)
  assert.equal(isFullArray([null]), true)
  assert.equal(isFullArray([, , ,]), true)
})

test('false when array length 0', () => {
  assert.equal(isFullArray([]), false)
})

test('false when not arrays', () => {
  assert.equal(isFullArray({}), false)
  assert.equal(isFullArray(new EventTarget()), false)
  assert.equal(isFullArray(new Map()), false)
})

test('false with primitives', () => {
  assert.equal(isFullArray('hi'), false)
  assert.equal(isFullArray(1), false)
  assert.equal(isFullArray(true), false)
  assert.equal(isFullArray(Symbol('a')), false)
  assert.equal(isFullArray(null), false)
  assert.equal(isFullArray(undefined), false)
})
