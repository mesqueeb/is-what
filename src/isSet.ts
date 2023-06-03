import { getType } from './getType'

/**
 * Returns whether the payload is a Set
 *
 * @param {*} payload
 * @returns {payload is Set<any>}
 */
export function isSet(payload: any): payload is Set<any> {
  return getType(payload) === 'Set'
}
