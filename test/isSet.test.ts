import test from "node:test";
import assert from "node:assert";
import isSet from "../src/isSet";

test("true with Set objects", () => {
  assert.equal(isSet(new Set()), true);
  assert.equal(isSet(new Set([1, 2, 3])), true);
});

test("true when prototype mutated after construction", () => {
  assert.equal(isSet(Object.setPrototypeOf(new Set(), null)), true);
});

test("false with non-Set objects", () => {
  assert.equal(isSet({}), false);
  assert.equal(isSet([]), false);
  assert.equal(isSet(Object(Symbol("a"))), false);
  assert.equal(isSet(new Map()), false);
  assert.equal(isSet(new WeakSet()), false);
});

test("false when Object.create(Set.prototype)", () => {
  assert.equal(isSet(Object.create(Set.prototype)), false);
});

test("false with primitives", () => {
  assert.equal(isSet("a"), false);
  assert.equal(isSet(1), false);
  assert.equal(isSet(true), false);
  assert.equal(isSet(Symbol("a")), false);
  assert.equal(isSet(null), false);
  assert.equal(isSet(undefined), false);
});
