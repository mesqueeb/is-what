import { getType } from './getType'

/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */
export function isNull(payload: any): payload is null {
  return getType(payload) === 'Null'
}
