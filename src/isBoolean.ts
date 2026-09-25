import { getType } from './getType.js'

/** Returns whether the payload is a boolean */
export function isBoolean(payload: unknown): payload is boolean {
  return getType(payload) === 'Boolean'
}
