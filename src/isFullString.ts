import { isString } from './isString'

/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
export function isFullString(payload: any): payload is string {
  return isString(payload) && payload !== ''
}
