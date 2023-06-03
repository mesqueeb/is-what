import test from "node:test";
import assert from "node:assert";
import isNumber from "../src/isNumber";

test("works with numbers", () => {
  assert.equal(isNumber(1), true);
  assert.equal(isNumber(0), true);
  assert.equal(isNumber(-1), true);
});

test("false when NaN", () => {
  assert.equal(isNumber(NaN), false);
});

test("true when Infinity", () => {
  assert.equal(isNumber(Infinity), true);
  assert.equal(isNumber(-Infinity), true);
});

test("false with anything else", () => {
  assert.equal(isNumber(true), false);
  assert.equal(isNumber(false), false);
  assert.equal(isNumber(Symbol("a")), false);
  assert.equal(isNumber({}), false);
  assert.equal(isNumber([]), false);
  assert.equal(isNumber("hi"), false);
  assert.equal(isNumber(new String("")), false);
  assert.equal(isNumber(null), false);
  assert.equal(isNumber(undefined), false);
});
