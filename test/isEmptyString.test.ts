import test from "node:test";
import assert from "node:assert";
import isEmptyString from "../src/isEmptyString";

test("works with empty strings", () => {
  assert.equal(isEmptyString(""), true);
});

test("false when string boxed value", () => {
  assert.equal(isEmptyString(new String("")), false);
});

test("false when non-empty strings", () => {
  assert.equal(isEmptyString("hi"), false);
  assert.equal(isEmptyString(" "), false);
  assert.equal(isEmptyString("0"), false);
  assert.equal(isEmptyString("false"), false);
});

test("false when anything else", () => {
  assert.equal(isEmptyString(1), false);
  assert.equal(isEmptyString(true), false);
  assert.equal(isEmptyString(Symbol("a")), false);
  assert.equal(isEmptyString(null), false);
  assert.equal(isEmptyString(undefined), false);
  assert.equal(isEmptyString({}), false);
  assert.equal(isEmptyString([]), false);
  assert.equal(
    isEmptyString(() => {}),
    false
  );
});
