import { getType } from './getType.js'

/**
 * Returns whether the payload is a WeakMap
 *
 * @param {any} payload
 * @returns {payload is WeakMap<any, any>}
 */
export function isWeakMap(payload: any): payload is WeakMap<any, any> {
  return getType(payload) === 'WeakMap'
}
