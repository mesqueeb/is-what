import { getType } from './getType.js'

/**
 * Returns whether the payload is undefined
 *
 * @param {any} payload
 * @returns {payload is undefined}
 */
export function isUndefined(payload: any): payload is undefined {
  return getType(payload) === 'Undefined'
}
