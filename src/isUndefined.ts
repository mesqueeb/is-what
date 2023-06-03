import { getType } from './getType'

/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
export function isUndefined(payload: any): payload is undefined {
  return getType(payload) === 'Undefined'
}
