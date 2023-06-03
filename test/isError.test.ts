import test from 'node:test'
import assert from 'node:assert'
import isError from '../src/isError.js'

test('works with errors', () => {
  assert.equal(isError(new Error()), true)
  assert.equal(isError(new EvalError()), true)
  assert.equal(isError(new RangeError()), true)
})

test('false when not errors', () => {
  assert.equal(isError({}), false)
  assert.equal(isError([]), false)
  assert.equal(
    isError(() => {}),
    false
  )
  assert.equal(isError('hi'), false)
  assert.equal(isError(1), false)
  assert.equal(isError(true), false)
  assert.equal(isError(Symbol('a')), false)
  assert.equal(isError(null), false)
  assert.equal(isError(undefined), false)
  assert.equal(isError(new Date()), false)
})

test('true when DOMException', () => {
  assert.equal(isError(new DOMException()), true)
})
