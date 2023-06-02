/**
 * Returns whether the payload is **exactly** the `null` value. This is a strict check and will
 * **return `false`** if given the `undefined` value. This is equivalent to manually checking if
 * `payload === null`.
 *
 * @example
 *   console.log(isNull(null))
 *   //=> true
 *   console.log(isNull(undefined))
 *   //=> false
 *   console.log(isNull('null'))
 *   //=> false
 */
export default function isNull(x: unknown): x is null {
  return x === null
}
