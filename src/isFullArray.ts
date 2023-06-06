import { isArray } from './isArray.js'

/**
 * Returns whether the payload is a an array with at least 1 item
 *
 * @param {*} payload
 * @returns {payload is any[]}
 */
export function isFullArray(payload: any): payload is any[] {
  return isArray(payload) && payload.length > 0
}
