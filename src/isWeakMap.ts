import { getType } from './getType.js'

/** Returns whether the payload is a WeakMap */
export function isWeakMap(payload: unknown): payload is WeakMap<WeakKey, unknown> {
  return getType(payload) === 'WeakMap'
}
