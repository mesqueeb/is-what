import test from "node:test";
import assert from "node:assert";
import isPrimitive from "../src/isPrimitive";

test("true with primitives", () => {
  assert.equal(isPrimitive(1), true);
  assert.equal(isPrimitive(true), true);
  assert.equal(isPrimitive(false), true);
  assert.equal(isPrimitive(Symbol("a")), true);
  assert.equal(isPrimitive("hi"), true);
  assert.equal(isPrimitive(1n), true);
  assert.equal(isPrimitive(null), true);
  assert.equal(isPrimitive(undefined), true);
});

test("false when NaN", () => {
  assert.equal(isPrimitive(NaN), false);
});

test("false with objects", () => {
  assert.equal(isPrimitive({}), false);
  assert.equal(isPrimitive(new EventTarget()), false);
  assert.equal(isPrimitive(new Map()), false);
  assert.equal(isPrimitive([]), false);
});

test("false with boxed primitives", () => {
  assert.equal(isPrimitive(new String("")), false);
  assert.equal(isPrimitive(new Number(1)), false);
  assert.equal(isPrimitive(new Boolean(true)), false);
  assert.equal(isPrimitive(Object(Symbol("a"))), false);
  assert.equal(isPrimitive(Object(1n)), false);
});
