import { getType } from './getType.js'

export type PlainObject = Record<string | number | symbol, any>

/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
export function isPlainObject(payload: any): payload is PlainObject {
  if (getType(payload) !== 'Object') return false
  const prototype = Object.getPrototypeOf(payload)
  return !!prototype && prototype.constructor === Object && prototype === Object.prototype
}
