import { isNumber } from './isNumber.js'

/**
 * Returns whether the payload is a positive number (but not 0)
 *
 * @param {*} payload
 * @returns {payload is number}
 */
export function isPositiveNumber(payload: any): payload is number {
  return isNumber(payload) && payload > 0
}
