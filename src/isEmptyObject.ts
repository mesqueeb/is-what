import { isPlainObject } from './isPlainObject.js'

/**
 * Returns whether the payload is a an empty object (excluding special classes or objects with other
 * prototypes)
 */
export function isEmptyObject(
  payload: unknown,
): payload is { [K in string | symbol | number]: never } {
  return isPlainObject(payload) && Object.keys(payload).length === 0
}
