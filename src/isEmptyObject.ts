import { isPlainObject } from './isPlainObject'

/**
 * Returns whether the payload is a an empty object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is { [K in any]: never }}
 */
export function isEmptyObject(payload: any): payload is { [K in any]: never } {
  return isPlainObject(payload) && Object.keys(payload).length === 0
}
