/**
 * Returns true _if and only if_ the given value is a `Date` object. The `Date` object **must** have
 * been created natively, not via `Object.create(Date.prototype)` or similar.
 *
 * @example
 *   console.log(isDate(new Date()))
 *   //=> true
 *   console.log(isDate(new Date('2020-01-01')))
 *   //=> true
 *   console.log(isDate(Object.create(Date.prototype)))
 *   //=> false
 *   console.log(isDate(1000))
 *   //=> false
 */
export default function isDate(x: unknown): x is Date {
  let y: number;
  try {
    y = Date.prototype.valueOf.call(x as Date);
  } catch {
    // Assume that it was a TypeError. If it was something else... 🤷‍♂️
    return false;
  }
  return !Number.isNaN(y);
}
