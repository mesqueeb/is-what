import test from 'node:test'
import assert from 'node:assert'
import isObject from '../src/isObject'

test('works with objects', () => {
  assert.equal(isObject({}), true)
  assert.equal(isObject({ a: 1 }), true)
  assert.equal(isObject({ [Symbol('a')]: 1 }), true)
})

test('acts like isPlainObject()', () => {
  assert.equal(isObject(Object.create(null)), false)
  assert.equal(isObject(new EventTarget()), false)
  assert.equal(isObject(new Map()), false)
  assert.equal(isObject(new Set()), false)
  assert.equal(isObject(new WeakMap()), false)
  assert.equal(isObject([]), false)
})

test('false with primitives', () => {
  assert.equal(isObject('hi'), false)
  assert.equal(isObject(1), false)
  assert.equal(isObject(true), false)
  assert.equal(isObject(Symbol('a')), false)
  assert.equal(isObject(null), false)
  assert.equal(isObject(undefined), false)
})

test('false for boxed primitives', () => {
  assert.equal(isObject(new String('')), false)
  assert.equal(isObject(new Number(1)), false)
  assert.equal(isObject(new Boolean(true)), false)
  assert.equal(isObject(Object(Symbol('a'))), false)
})

test('false for functions', () => {
  assert.equal(
    isObject(() => {}),
    false
  )
  assert.equal(
    isObject(function () {}),
    false
  )
})
