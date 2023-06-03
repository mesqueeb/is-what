import test from "node:test";
import assert from "node:assert";
import isBoolean from "../src/isBoolean";

test("works with booleans", () => {
  assert.equal(isBoolean(true), true);
  assert.equal(isBoolean(false), true);
});

test("false with Object.create(Boolean.prototype)", () => {
  assert.equal(isBoolean(Object.create(Boolean.prototype)), false);
});

test("false with Boolean boxed primitives", () => {
  assert.equal(isBoolean(new Boolean(true)), false);
  assert.equal(isBoolean(new Boolean(false)), false);
});

test("false with non-booleans", () => {
  assert.equal(isBoolean({}), false);
  assert.equal(isBoolean(new EventTarget()), false);
  assert.equal(isBoolean(new Map()), false);
  assert.equal(isBoolean([]), false);
  assert.equal(isBoolean(null), false);
  assert.equal(isBoolean(undefined), false);
  assert.equal(isBoolean("true"), false);
  assert.equal(isBoolean("false"), false);
  assert.equal(isBoolean(1), false);
  assert.equal(isBoolean(0), false);
  assert.equal(isBoolean(Symbol("a")), false);
});
