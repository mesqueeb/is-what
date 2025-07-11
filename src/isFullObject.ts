import type { PlainObject } from './isPlainObject.js'
import { isPlainObject } from './isPlainObject.js'

/**
 * Returns whether the payload is a an empty object (excluding special classes or objects with other
 * prototypes)
 */
export function isFullObject(payload: unknown): payload is PlainObject {
  return isPlainObject(payload) && Object.keys(payload).length > 0
}
