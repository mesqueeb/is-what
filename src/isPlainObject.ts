/**
 * Returns true **if and only if** the given parameter is a `{}` plain object. This will return
 * **`false`** for `Object.create(null)` objects. All other objects with a non-`Object.prototype`
 * prototype will return `false`.
 *
 * ℹ This is stricter than both [is-plain-obj](https://www.npmjs.com/package/is-plain-obj) and
 * [is-plain-object](https://www.npmjs.com/package/is-plain-object).
 *
 * 🛑 This check does _work_ across realms, but the guarentee is not as strict. Across realms, we
 * can only verify that the prototype of the object's prototype is `null` (meaning that
 * `Object.getPrototypeOf(v)` was the last link in the prototype chain). This means that across
 * realms, you can be 95% sure that `if (isPlainObject(iframe.contentWindow.hello)) { ... }` means
 * that `hello` is a plain object. However, it is possible that the object doesn't inherit from
 * `Object` and instead starts its own prototype chain. This is very unlikely, but [it is
 * possible](https://stackoverflow.com/questions/41189190/how-and-why-would-i-write-a-class-that-extends-null).
 *
 * @example
 *   console.log(isPlainObject({}))
 *   //=> true
 *   console.log(isPlainObject({ a: 1 }))
 *   //=> true
 *   console.log(isPlainObject('hi'))
 *   //=> false
 *   console.log(isPlainObject(Object.create(null))) // ❗
 *   //=> false
 *   console.log(isPlainObject(null))
 *   //=> false
 *
 * @see https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
 * @see https://github.com/jonschlinkert/is-plain-object/blob/master/is-plain-object.js
 */
export default function isPlainObject<
  T extends object = Record<keyof any, unknown>
>(x: unknown): x is T {
  if (!x || (typeof x !== "object" && typeof x !== "function")) {
    return false;
  }

  const p = Object.getPrototypeOf(x);
  return (
    !!p &&
    (p === Object.prototype || Object.getPrototypeOf(p) == null) &&
    !(Symbol.toStringTag in x) &&
    !(Symbol.iterator in x)
  );
}
