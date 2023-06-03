import { getType } from './getType'

/**
 * Returns whether the payload is a WeakMap
 *
 * @param {*} payload
 * @returns {payload is WeakMap<any, any>}
 */
export function isWeakMap(payload: any): payload is WeakMap<any, any> {
  return getType(payload) === 'WeakMap'
}
