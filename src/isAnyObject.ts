import { getType } from './getType.js'
import { PlainObject } from './isPlainObject.js'

/**
 * Returns whether the payload is an any kind of object (including special classes or objects with
 * different prototypes)
 *
 * @param {any} payload
 * @returns {payload is PlainObject}
 */
export function isAnyObject(payload: any): payload is PlainObject {
  return getType(payload) === 'Object'
}
