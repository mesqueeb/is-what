import test from 'node:test'
import assert from 'node:assert'
import isBlob from '../src/isBlob.js'

test('works with Blob', () => {
  assert.equal(isBlob(new Blob()), true)
  assert.equal(isBlob(new Blob(['hi'])), true)
})

test('false with Object.create(Blob.prototype)', () => {
  assert.equal(isBlob(Object.create(Blob.prototype)), false)
})

test('true when prototype mutated after construction', () => {
  const x = new Blob()
  Object.setPrototypeOf(x, null)
  assert.equal(isBlob(x), true)
})

test('false with non-Blob objects', () => {
  assert.equal(isBlob({}), false)
  assert.equal(isBlob(new EventTarget()), false)
  assert.equal(isBlob(new Map()), false)
})

test('false with primitives', () => {
  assert.equal(isBlob('hi'), false)
  assert.equal(isBlob(1), false)
  assert.equal(isBlob(true), false)
  assert.equal(isBlob(Symbol('a')), false)
  assert.equal(isBlob(null), false)
  assert.equal(isBlob(undefined), false)
})
