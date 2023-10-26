import { PlainObject, isPlainObject } from './isPlainObject.js'

/**
 * Returns whether the payload is a an empty object (excluding special classes or objects with other
 * prototypes)
 *
 * @param {any} payload
 * @returns {payload is PlainObject}
 */
export function isFullObject(payload: any): payload is PlainObject {
  return isPlainObject(payload) && Object.keys(payload).length > 0
}
