/**
 * Returns `true` _if and only if_ the given value is a boolean. This is equivalent to manually
 * doing `typeof x === 'boolean'`.
 *
 * @example
 *   console.log(isBoolean(true))
 *   //=> true
 *   console.log(isBoolean(false))
 *   //=> true
 *   console.log(isBoolean('true'))
 *   //=> false
 *   console.log(isBoolean(1))
 *   //=> false
 *   console.log(isBoolean(null))
 *   //=> false
 */
export default function isBoolean(x: unknown): x is boolean {
  return typeof x === "boolean";
}
