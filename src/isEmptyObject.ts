import isPlainObject from './isPlainObject.js'

/**
 * Returns true if the given payload is an empty object (`{}`). The object _must_ be a plain object
 * (as detected by `isPlainObject()`) and have _zero_ own keys. This includes non-enumarable keys
 * and symbols!
 *
 * @example
 *   console.log(isEmptyObject({}))
 *   //=> true
 *   console.log(isEmptyObject({ a: 1 }))
 *   //=> false
 *   console.log(isEmptyObject(Object.create(null))) // ❗
 *   //=> false
 *   console.log(isEmptyObject({ [Symbol('a')]: 1 }))
 *   //=> false
 *   console.log(isEmptyObject(new Map()))
 *   //=> false
 *
 * @see {@link isPlainObject}
 */
export default function isEmptyObject(x: unknown): x is Record<keyof any, never> {
  return isPlainObject(x) && !Reflect.ownKeys(x).length
}
