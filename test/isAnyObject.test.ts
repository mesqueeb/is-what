import test from "node:test";
import assert from "node:assert";
import isAnyObject from "../src/isAnyObject";
import isPlainObject from "../src/isPlainObject";

test("works regular objects", () => {
  assert.equal(isAnyObject({}), true);
  assert.equal(isAnyObject(new Object()), true);
  assert.equal(isAnyObject(Object.create(null)), true);
});

test("false when array", () => {
  assert.equal(isAnyObject([]), false);
  assert.equal(isAnyObject(new Array()), false);
});

test("false with functions", () => {
  assert.equal(
    isAnyObject(() => {}),
    false
  );
  assert.equal(
    isAnyObject(function () {}),
    false
  );
  assert.equal(
    isAnyObject(function* () {}),
    false
  );
});

test("works with user-defined types", () => {
  class C {
    get [Symbol.toStringTag]() {
      return "C";
    }
  }
  assert.equal(isAnyObject(new C()), false);

  class D {}
  assert.equal(isAnyObject(new D()), true);
});

test("works with built-in types", () => {
  assert.equal(isAnyObject(new Date()), false);
  assert.equal(isAnyObject(new Error()), false);
  assert.equal(isAnyObject(new Map()), false);
  assert.equal(isAnyObject(Promise.resolve()), false);
  assert.equal(isAnyObject(new Set()), false);
  assert.equal(isAnyObject(new WeakMap()), false);
});

test("works with primitives", () => {
  assert.equal(isAnyObject("hi"), false);
  assert.equal(isAnyObject(1), false);
  assert.equal(isAnyObject(true), false);
  assert.equal(isAnyObject(Symbol("a")), false);
  assert.equal(isAnyObject(null), false);
  assert.equal(isAnyObject(undefined), false);
});

test("compare with isPlainObject()", () => {
  var x: any;

  x = {};
  assert.equal(isAnyObject(x), true);
  assert.equal(isPlainObject(x), true);

  x = new Object();
  assert.equal(isAnyObject(x), true);
  assert.equal(isPlainObject(x), true);

  x = { constructor: "123" };
  assert.equal(isAnyObject(x), true);
  assert.equal(isPlainObject(x), true);

  x = Object.create(null);
  assert.equal(isAnyObject(x), true);
  assert.equal(isPlainObject(x), false);

  x = new Map();
  assert.equal(isAnyObject(x), false);
  assert.equal(isPlainObject(x), false);

  class C {}
  x = C;
  assert.equal(isAnyObject(x), false);
  assert.equal(isPlainObject(x), false);

  x = new C();
  assert.equal(isAnyObject(x), true);
  assert.equal(isPlainObject(x), false);

  class D {
    get [Symbol.toStringTag]() {
      return "D";
    }
  }
  x = new D();
  assert.equal(isAnyObject(x), false);
  assert.equal(isPlainObject(x), false);

  x = new Date();
  assert.equal(isAnyObject(x), true);
  assert.equal(isPlainObject(x), false);

  x = new Error();
  assert.equal(isAnyObject(x), true);
  assert.equal(isPlainObject(x), false);

  x = [];
  assert.equal(isAnyObject(x), false);
  assert.equal(isPlainObject(x), false);
});
