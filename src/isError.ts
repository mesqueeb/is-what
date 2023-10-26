import { getType } from './getType.js'

/**
 * Returns whether the payload is an Error
 *
 * @param {any} payload
 * @returns {payload is Error}
 */
export function isError(payload: any): payload is Error {
  return getType(payload) === 'Error' || payload instanceof Error
}
