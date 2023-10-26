import { PlainObject, isPlainObject } from './isPlainObject.js'

/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects
 * with other prototypes)
 *
 * @param {any} payload
 * @returns {payload is PlainObject}
 */
export function isObject(payload: any): payload is PlainObject {
  return isPlainObject(payload)
}
