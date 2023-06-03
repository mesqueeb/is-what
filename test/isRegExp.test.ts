import test from "node:test";
import assert from "node:assert";
import isRegExp from "../src/isRegExp";

test("true with RegExp objects", () => {
  assert.equal(isRegExp(/a/), true);
  assert.equal(isRegExp(new RegExp("a")), true);
});

test("false with non-RegExp objects", () => {
  assert.equal(isRegExp({}), false);
  assert.equal(isRegExp([]), false);
  assert.equal(isRegExp(Object(Symbol("a"))), false);
  assert.equal(isRegExp(new Map()), false);
  assert.equal(isRegExp(new Set()), false);
});

test("true when prototype mutated after construction", () => {
  assert.equal(isRegExp(Object.setPrototypeOf(/a/, null)), true);
});

test("false with primitives", () => {
  assert.equal(isRegExp("a"), false);
  assert.equal(isRegExp(1), false);
  assert.equal(isRegExp(true), false);
  assert.equal(isRegExp(Symbol("a")), false);
  assert.equal(isRegExp(null), false);
  assert.equal(isRegExp(undefined), false);
});
