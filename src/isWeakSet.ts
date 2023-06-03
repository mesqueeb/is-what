import { getType } from './getType'

/**
 * Returns whether the payload is a WeakSet
 *
 * @param {*} payload
 * @returns {payload is WeakSet<any>}
 */
export function isWeakSet(payload: any): payload is WeakSet<any> {
  return getType(payload) === 'WeakSet'
}
