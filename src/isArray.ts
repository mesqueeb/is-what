/**
 * Checks if the given value is (was originally instantiated as) an array. This is equivalent to
 * `Array.isArray()`. If you're using this to `if (isArray(x)) { ... }`, be warned that _it is
 * possible_ that `x` was an array at one point, but has since been mutated to be something else via
 * `Object.setPrototypeOf()`. This is a rare edge case, but it's worth mentioning.
 *
 * Also note that this **does work** across realms. So if you have an `<iframe>` or a `WindowProxy`
 * (from `window.open()`), this will still work! It relies on the native instantiation "stamp" given
 * by the JavaScript engine when `[]` or `new Array()` is encountered.
 *
 * You might instead want to check for `isInstanceOf(x, "Array")` if you want to check if `x`
 * extends the `Array` prototype chain. You could also coerce the value to an array with
 * `Array.from(x)` or `[...x]`.
 *
 * @example
 *   console.log(isArray([]))
 *   //=> true
 *   console.log(isArray(Object.setPrototypeOf([], String.prototype)))
 *   //=> true
 *   console.log(isArray({}))
 *   //=> false
 *   console.log(isArray(Object.create(Array.prototype)))
 *   //=> false
 *   console.log(isArray('hi'))
 *   //=> false
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 */
export default function isArray<T extends unknown[] = unknown[]>(
  x: unknown
): x is T {
  return Array.isArray(x);
}
