import { getType } from './getType'

/**
 * Returns whether the payload is a Promise
 *
 * @param {*} payload
 * @returns {payload is Promise<any>}
 */
export function isPromise(payload: any): payload is Promise<any> {
  return getType(payload) === 'Promise'
}
