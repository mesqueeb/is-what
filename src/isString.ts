import { getType } from './getType.js'

/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
export function isString(payload: any): payload is string {
  return getType(payload) === 'String'
}
