import type { PlainObject } from './isPlainObject.js'
import { isPlainObject } from './isPlainObject.js'

/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects
 * with other prototypes)
 */
export function isObject(payload: unknown): payload is PlainObject {
  return isPlainObject(payload)
}
