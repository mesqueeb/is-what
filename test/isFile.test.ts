import test from "node:test";
import assert from "node:assert";
import isFile from "../src/isFile";

test("works with files", () => {
  assert.equal(isFile(new File([], "a")), true);
  assert.equal(isFile(new File([], "a", { type: "text/plain" })), true);
});

test("false when not files", () => {
  assert.equal(isFile({}), false);
  assert.equal(isFile([]), false);
  assert.equal(isFile(new EventTarget()), false);
  assert.equal(isFile(new Map()), false);
  assert.equal(isFile(Object.create(null)), false);
});

test("false with primitives", () => {
  assert.equal(isFile("hi"), false);
  assert.equal(isFile(1), false);
  assert.equal(isFile(true), false);
  assert.equal(isFile(Symbol("a")), false);
  assert.equal(isFile(null), false);
  assert.equal(isFile(undefined), false);
});

test("false with Object.create(File.prototype)", () => {
  assert.equal(isFile(Object.create(File.prototype)), false);
});
