import { getType } from './getType'

/**
 * Returns whether the payload is a Map
 *
 * @param {*} payload
 * @returns {payload is Map<any, any>}
 */
export function isMap(payload: any): payload is Map<any, any> {
  return getType(payload) === 'Map'
}
