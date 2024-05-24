import { getType } from './getType.js'

/** Returns whether the payload is undefined */
export function isUndefined(payload: unknown): payload is undefined {
  return getType(payload) === 'Undefined'
}
