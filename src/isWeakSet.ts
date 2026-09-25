import { getType } from './getType.js'

/** Returns whether the payload is a WeakSet */
export function isWeakSet(payload: unknown): payload is WeakSet<WeakKey> {
  return getType(payload) === 'WeakSet'
}
