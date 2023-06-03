import test from 'node:test'
import assert from 'node:assert'
import isFullString from '../src/isFullString.js'

test('works with full strings', () => {
  assert.equal(isFullString('hi'), true)
  assert.equal(isFullString(' '), true)
  assert.equal(isFullString('0'), true)
  assert.equal(isFullString('false'), true)
})

test('false when string boxed value', () => {
  assert.equal(isFullString(new String('hi')), false)
  assert.equal(isFullString(new String(' ')), false)
  assert.equal(isFullString(new String('0')), false)
})

test('false when empty strings', () => {
  assert.equal(isFullString(''), false)
})

test('false when anything else', () => {
  assert.equal(isFullString(1), false)
  assert.equal(isFullString(true), false)
  assert.equal(isFullString(Symbol('a')), false)
  assert.equal(isFullString(null), false)
  assert.equal(isFullString(undefined), false)
  assert.equal(isFullString({}), false)
  assert.equal(isFullString([]), false)
  assert.equal(
    isFullString(() => {}),
    false
  )
  assert.equal(isFullString(new Map()), false)
  assert.equal(isFullString(new EventTarget()), false)
})
