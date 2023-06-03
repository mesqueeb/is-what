import test from 'node:test'
import assert from 'node:assert'
import isNegativeNumber from '../src/isNegativeNumber'

test('works with negative numbers', () => {
  assert.equal(isNegativeNumber(-1), true)
  assert.equal(isNegativeNumber(-0.1), true)
  assert.equal(isNegativeNumber(-100), true)
})

test('false with non-negative numbers', () => {
  assert.equal(isNegativeNumber(0), false)
  assert.equal(isNegativeNumber(1), false)
  assert.equal(isNegativeNumber(0.1), false)
  assert.equal(isNegativeNumber(100), false)
})

test('false with boxed negative numbers', () => {
  assert.equal(isNegativeNumber(new Number(-1)), false)
  assert.equal(isNegativeNumber(new Number(-0.1)), false)
  assert.equal(isNegativeNumber(new Number(-100)), false)
})

test('false with objects', () => {
  assert.equal(isNegativeNumber({}), false)
  assert.equal(isNegativeNumber([]), false)
  assert.equal(isNegativeNumber(new Map()), false)
  assert.equal(isNegativeNumber(new Set()), false)
})

test('false with other primitives', () => {
  assert.equal(isNegativeNumber('hi'), false)
  assert.equal(isNegativeNumber(true), false)
  assert.equal(isNegativeNumber(Symbol('a')), false)
  assert.equal(isNegativeNumber(null), false)
  assert.equal(isNegativeNumber(undefined), false)
})
