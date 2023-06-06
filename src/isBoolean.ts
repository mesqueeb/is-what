import { getType } from './getType.js'

/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
export function isBoolean(payload: any): payload is boolean {
  return getType(payload) === 'Boolean'
}
