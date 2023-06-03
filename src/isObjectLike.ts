import { isAnyObject } from './isAnyObject'
import { PlainObject } from './isPlainObject'

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
