import test from 'node:test'
import assert from 'node:assert'
import isType from '../src/isType.js'

test('false with any primitive', () => {
  assert.equal(isType('hi', String), false)
  assert.equal(isType(1, Number), false)
  assert.equal(isType(true, Boolean), false)
  // @ts-ignore Symbol isn't new-able but it works here
  assert.equal(isType(Symbol('a'), Symbol), false)
})

test('true with boxed primitives', () => {
  assert.equal(isType(new String(''), String), true)
  assert.equal(isType(new Number(1), Number), true)
  assert.equal(isType(new Boolean(true), Boolean), true)
})

test("doesn't follow inheritance", () => {
  assert.equal(isType([], Object), false)
  assert.equal(isType(new String(), Object), false)
  assert.equal(isType(new Number(), Object), false)
  assert.equal(isType(new Map(), Object), false)
  assert.equal(isType(new CustomEvent('event'), Event), false)
})

test('true with objects', () => {
  assert.equal(isType({}, Object), true)
  assert.equal(isType(new EventTarget(), EventTarget), true)
  assert.equal(isType(new Map(), Map), true)
})
