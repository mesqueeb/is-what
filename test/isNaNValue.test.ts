import test from 'node:test'
import assert from 'node:assert'
import isNaNValue from '../src/isNaNValue'

test('works with NaN', () => {
  assert.equal(isNaNValue(NaN), true)
})

test('false with non-NaN', () => {
  assert.equal(isNaNValue(1), false)
  assert.equal(isNaNValue('hi'), false)
  assert.equal(isNaNValue(true), false)
  assert.equal(isNaNValue(Symbol('a')), false)
  assert.equal(isNaNValue(null), false)
  assert.equal(isNaNValue(undefined), false)
  assert.equal(isNaNValue({}), false)
  assert.equal(isNaNValue([]), false)
  assert.equal(
    isNaNValue(() => {}),
    false
  )
  assert.equal(isNaNValue(new Map()), false)
  assert.equal(isNaNValue(new Set()), false)
})

test('false with boxed NaN', () => {
  assert.equal(isNaNValue(new Number(NaN)), false)
})
