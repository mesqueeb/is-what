import { isNumber } from './isNumber.js'

/**
 * Returns whether the payload is a negative number (but not 0)
 *
 * @param {*} payload
 * @returns {payload is number}
 */
export function isNegativeNumber(payload: any): payload is number {
  return isNumber(payload) && payload < 0
}
