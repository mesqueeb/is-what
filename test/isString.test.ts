import test from 'node:test'
import assert from 'node:assert'
import isString from '../src/isString'

test('true with strings', () => {
  assert.equal(isString(''), true)
  assert.equal(isString('hi'), true)
})

test('false with boxed Strings', () => {
  assert.equal(isString(new String('')), false)
})

test('false with primitives', () => {
  assert.equal(isString(1), false)
  assert.equal(isString(true), false)
  assert.equal(isString(false), false)
  assert.equal(isString(Symbol('a')), false)
  assert.equal(isString(null), false)
  assert.equal(isString(undefined), false)
})

test('false with objects', () => {
  assert.equal(isString({}), false)
  assert.equal(isString([]), false)
  assert.equal(isString(new Map()), false)
  assert.equal(isString(new Set()), false)
  assert.equal(isString(new WeakMap()), false)
})
