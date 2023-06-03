import { isAnyObject } from './isAnyObject.js'
import { PlainObject } from './isPlainObject.js'

/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: any}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */
export function isObjectLike<T extends PlainObject>(payload: any): payload is T {
  return isAnyObject(payload)
}
