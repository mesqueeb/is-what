import test from "node:test";
import assert from "node:assert";
import isPromise from "../src/isPromise";

test("true with promises", async () => {
  const rejecting = Promise.reject();
  rejecting.catch(() => {});

  assert.equal(isPromise(Promise.resolve()), true);
  assert.equal(isPromise(rejecting), true);

  // Wait for promises to settle
  await new Promise((r) => setTimeout(r, 10));
});

test("false with primitves", () => {
  assert.equal(isPromise(1), false);
  assert.equal(isPromise(true), false);
  assert.equal(isPromise(false), false);
  assert.equal(isPromise(Symbol("a")), false);
  assert.equal(isPromise(null), false);
  assert.equal(isPromise(undefined), false);
});

test("false with objects", () => {
  assert.equal(isPromise({}), false);
  assert.equal(isPromise([]), false);
  assert.equal(isPromise(Object(Symbol("a"))), false);
  assert.equal(isPromise(new Map()), false);
  assert.equal(isPromise(new Set()), false);
});

test("true with custom Promise class", () => {
  class Promise {
    get [Symbol.toStringTag]() {
      return "Promise";
    }
  }
  assert.equal(isPromise(new Promise()), true);
});

test("false with .then()-able objects that aren't promises", () => {
  class Thenable {
    then() {}
    [Symbol.toStringTag]() {
      return "Thenable";
    }
  }
  assert.equal(isPromise(new Thenable()), false);
  assert.equal(isPromise({ then: () => {} }), false);
});

test("false with functions", () => {
  assert.equal(
    isPromise(() => {}),
    false
  );
  assert.equal(
    isPromise(function () {}),
    false
  );
  assert.equal(
    isPromise(function* () {}),
    false
  );
});
