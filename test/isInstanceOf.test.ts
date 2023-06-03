import test from "node:test";
import assert from "node:assert";
import isInstanceOf from "../src/isInstanceOf";

test("new Thing() is instance of Thing", () => {
  class Thing {}
  assert.equal(isInstanceOf(new Thing(), Thing), true);
});

test("new Thing() is not instance of OtherThing", () => {
  class Thing {}
  class OtherThing {}
  assert.equal(isInstanceOf(new Thing(), OtherThing), false);
});

test("new Thing() is instance of Object", () => {
  class Thing {}
  assert.equal(isInstanceOf(new Thing(), Object), true);
});

test("works with string keys as class names", () => {
  class Thing {
    get [Symbol.toStringTag]() {
      return "Thing";
    }
  }
  assert.equal(isInstanceOf(new Thing(), "Thing"), true);

  assert.equal(isInstanceOf(new EventTarget(), "EventTarget"), true);
  assert.equal(isInstanceOf(new CustomEvent("event"), "Event"), true);
  assert.equal(isInstanceOf(new Map(), "Map"), true);
  assert.equal(isInstanceOf(new Set(), "Set"), true);
  assert.equal(isInstanceOf(new WeakMap(), "WeakMap"), true);
});

test("return false with primitives when passed class function", () => {
  assert.equal(isInstanceOf("hi", String), false);
  assert.equal(isInstanceOf(1, Number), false);
  assert.equal(isInstanceOf(true, Boolean), false);
  // @ts-ignore Symbol isn't new-able, but it works for this test
  assert.equal(isInstanceOf(Symbol("a"), Symbol), false);
  assert.equal(isInstanceOf(null, Object), false);
  assert.equal(isInstanceOf(undefined, Object), false);
});

test("works with Symbol.hasInstance", () => {
  class C {
    static [Symbol.hasInstance](x: unknown) {
      return true;
    }
  }
  assert.equal(isInstanceOf({}, C), true);
  assert.equal(isInstanceOf([], C), true);
  assert.equal(isInstanceOf(new EventTarget(), C), true);
});

test("Symbol.hasInstance works even when passed primitive", () => {
  class C {
    static [Symbol.hasInstance](x: unknown) {
      return true;
    }
  }
  assert.equal(isInstanceOf("hi", C), true);
  assert.equal(isInstanceOf(1, C), true);
  assert.equal(isInstanceOf(true, C), true);
  assert.equal(isInstanceOf(Symbol("a"), C), true);
  assert.equal(isInstanceOf(null, C), true);
  assert.equal(isInstanceOf(undefined, C), true);
});
