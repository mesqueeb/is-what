/**
 * Returns whether the given value is `undefined`. This is equivalent to manually checking if
 * `x === undefined`. This will **return `false`** if given the `null` value.
 *
 * @example
 *   console.log(isUndefined(null))
 *   //=> false
 *   console.log(isUndefined(undefined))
 *   //=> true
 *   console.log(isUndefined('undefined'))
 *   //=> false
 */
export default function isUndefined(x: unknown): x is undefined {
  return x === undefined
}
