import test from "node:test";
import assert from "node:assert";
import isSymbol from "../src/isSymbol";

test("true with symbols", () => {
  assert.equal(isSymbol(Symbol("a")), true);
  assert.equal(isSymbol(Symbol(1)), true);
  assert.equal(isSymbol(Symbol()), true);
});

test("false with boxed Symbols", () => {
  assert.equal(isSymbol(Object(Symbol("a"))), false);
  assert.equal(isSymbol(Object(Symbol(1))), false);
  assert.equal(isSymbol(Object(Symbol())), false);
});

test("false with other primitives", () => {
  assert.equal(isSymbol(1), false);
  assert.equal(isSymbol("a"), false);
  assert.equal(isSymbol(true), false);
  assert.equal(isSymbol(false), false);
  assert.equal(isSymbol(null), false);
  assert.equal(isSymbol(undefined), false);
});

test("false with objects", () => {
  assert.equal(isSymbol({}), false);
  assert.equal(isSymbol([]), false);
  assert.equal(isSymbol(new String("")), false);
  assert.equal(isSymbol(new Number(1)), false);
  assert.equal(isSymbol(new Map()), false);
  assert.equal(isSymbol(new Set()), false);
});
