import test from "node:test";
import assert from "node:assert";
import isNull from "../src/isNull";

test("works with null", () => {
  assert.equal(isNull(null), true);
});

test("false with undefined", () => {
  assert.equal(isNull(undefined), false);
});

test("false with other primitives", () => {
  assert.equal(isNull("hi"), false);
  assert.equal(isNull(1), false);
  assert.equal(isNull(true), false);
  assert.equal(isNull(Symbol("a")), false);
  assert.equal(isNull(0), false);
  assert.equal(isNull(false), false);
});

test("false with objects", () => {
  assert.equal(isNull({}), false);
  assert.equal(isNull([]), false);
  assert.equal(isNull(new Map()), false);
  assert.equal(isNull(new Set()), false);
  assert.equal(isNull(new Date()), false);
});
