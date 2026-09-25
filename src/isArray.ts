import { getType } from './getType.js'

/** Returns whether the payload is an array */
export function isArray(payload: unknown): payload is unknown[] {
  return getType(payload) === 'Array'
}
