import test from "node:test";
import assert from "node:assert";
import isPositiveNumber from "../src/isPositiveNumber";

test("works with positive numbers", () => {
  assert.equal(isPositiveNumber(1), true);
  assert.equal(isPositiveNumber(0.1), true);
  assert.equal(isPositiveNumber(Number.MAX_SAFE_INTEGER), true);
});

test("Infinity is true", () => {
  assert.equal(isPositiveNumber(Infinity), true);
});

test("negative numbers are false", () => {
  assert.equal(isPositiveNumber(-1), false);
  assert.equal(isPositiveNumber(-0.1), false);
  assert.equal(isPositiveNumber(Number.MIN_SAFE_INTEGER), false);
});

test("NaN is false", () => {
  assert.equal(isPositiveNumber(NaN), false);
});

test("non-numbers are false", () => {
  assert.equal(isPositiveNumber("hi"), false);
  assert.equal(isPositiveNumber(true), false);
  assert.equal(isPositiveNumber(false), false);
  assert.equal(isPositiveNumber(Symbol("a")), false);
  assert.equal(isPositiveNumber({}), false);
  assert.equal(isPositiveNumber([]), false);
  assert.equal(isPositiveNumber(new String("")), false);
  assert.equal(isPositiveNumber(new Map()), false);
  assert.equal(isPositiveNumber(new Set()), false);
});
