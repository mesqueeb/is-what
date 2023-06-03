import test from "node:test";
import assert from "node:assert";
import isType from "../src/isType";

test("true with primitives", () => {
  assert.equal(isType("hi", String), true);
  assert.equal(isType(1, Number), true);
  assert.equal(isType(true, Boolean), true);
  // @ts-ignore Symbol isn't new-able but it works here
  assert.equal(isType(Symbol("a"), Symbol), true);
});

test("true with boxed primitives", () => {
  assert.equal(isType(new String(""), String), true);
  assert.equal(isType(new Number(1), Number), true);
  assert.equal(isType(new Boolean(true), Boolean), true);
});

test("follow inheritance", () => {
  assert.equal(isType([], Object), true);
  assert.equal(isType(new String(), Object), true);
  assert.equal(isType(new Number(), Object), true);
  assert.equal(isType(new Map(), Object), true);
  assert.equal(isType(new CustomEvent("event"), Event), true);
});

test("true with objects", () => {
  assert.equal(isType({}, Object), true);
  assert.equal(isType(new EventTarget(), EventTarget), true);
  assert.equal(isType(new Map(), Map), true);
});

test("custom classes that don't set Symbol.toStringTag are Object", () => {
  class C {}
  assert.equal(isType(new C(), Object), true);
});

test("custom classes that don't set Symbol.toStringTag are that class", () => {
  class C {}
  assert.equal(isType(new C(), C), true);
});
