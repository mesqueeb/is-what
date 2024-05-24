import { getType } from './getType.js'

export type PlainObject = Record<string | number | symbol, unknown>

/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects
 * with other prototypes)
 */
export function isPlainObject(payload: unknown): payload is PlainObject {
  if (getType(payload) !== 'Object') return false
  const prototype = Object.getPrototypeOf(payload)
  return !!prototype && prototype.constructor === Object && prototype === Object.prototype
}
