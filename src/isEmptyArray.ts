import { isArray } from './isArray.js'

/**
 * Returns whether the payload is a an empty array
 *
 * @param {*} payload
 * @returns {payload is []}
 */
export function isEmptyArray(payload: any): payload is [] {
  return isArray(payload) && payload.length === 0
}
