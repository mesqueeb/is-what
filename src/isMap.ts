import { getType } from './getType.js'

/** Returns whether the payload is a Map */
export function isMap(payload: unknown): payload is Map<unknown, unknown> {
  return getType(payload) === 'Map'
}
