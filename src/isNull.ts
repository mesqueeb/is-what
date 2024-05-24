import { getType } from './getType.js'

/** Returns whether the payload is null */
export function isNull(payload: unknown): payload is null {
  return getType(payload) === 'Null'
}
