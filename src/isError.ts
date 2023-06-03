import { getType } from './getType'

/**
 * Returns whether the payload is an Error
 *
 * @param {*} payload
 * @returns {payload is Error}
 */
export function isError(payload: any): payload is Error {
  return getType(payload) === 'Error'
}
