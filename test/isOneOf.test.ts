import test from 'node:test'
import assert from 'node:assert'
import isOneOf from '../src/isOneOf'
import isString from '../src/isString'
import isNumber from '../src/isNumber'

test('combines isString() and isNumber()', () => {
  assert.equal(isOneOf(isString, isNumber)('hi'), true)
  assert.equal(isOneOf(isString, isNumber)(1), true)
  assert.equal(isOneOf(isString, isNumber)(true), false)
  assert.equal(isOneOf(isString, isNumber)(Symbol('a')), false)
  assert.equal(isOneOf(isString, isNumber)(null), false)
  assert.equal(isOneOf(isString, isNumber)(undefined), false)
})

test('works with many predicates', () => {
  const predicates = Array.from({ length: 100 }, () => isString)
  assert.equal(isOneOf(...predicates)('hi'), true)
})

test('works with no predicates', () => {
  assert.equal(isOneOf()('hi'), false)
})

test('works with user-defined predicates', () => {
  const isFoo = (x: unknown): x is 'foo' => x === 'foo'
  assert.equal(isOneOf(isFoo)('foo'), true)
  assert.equal(isOneOf(isFoo)('bar'), false)
})
