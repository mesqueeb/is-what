import test from "node:test";
import assert from "node:assert";
import isObjectLike from "../src/isObjectLike";

test("true with objects", () => {
  assert.equal(isObjectLike({}), true);
  assert.equal(isObjectLike(new EventTarget()), true);
  assert.equal(isObjectLike(new Map()), true);
});

test("false with primitives", () => {
  assert.equal(isObjectLike("hi"), false);
  assert.equal(isObjectLike(1), false);
  assert.equal(isObjectLike(true), false);
  assert.equal(isObjectLike(Symbol("a")), false);
  assert.equal(isObjectLike(null), false);
  assert.equal(isObjectLike(undefined), false);
});

test("true with Object.create(null)", () => {
  assert.equal(isObjectLike(Object.create(null)), true);
});

test("true with boxed primitives", () => {
  assert.equal(isObjectLike(new String("")), true);
  assert.equal(isObjectLike(new Number(1)), true);
  assert.equal(isObjectLike(new Boolean(true)), true);
  assert.equal(isObjectLike(Object(Symbol("a"))), true);
});

test("true with arrays", () => {
  assert.equal(isObjectLike([]), true);
});

test("true with array-like objects", () => {
  const argumentsObject = (function () {
    return arguments;
  })();
  assert.equal(isObjectLike(argumentsObject), true);

  assert.equal(isObjectLike({ length: 0 }), true);
});

test("true with functions", () => {
  assert.equal(
    isObjectLike(() => {}),
    true
  );
  assert.equal(
    isObjectLike(function () {}),
    true
  );
  assert.equal(
    isObjectLike(function* () {}),
    true
  );
});
