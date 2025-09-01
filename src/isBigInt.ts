import { getType } from './getType.js'

/** Returns whether the payload is a bigint */
export function isBigInt(payload: unknown): payload is bigint {
  return getType(payload) === 'BigInt'
}
