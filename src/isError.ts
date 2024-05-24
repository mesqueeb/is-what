import { getType } from './getType.js'

/** Returns whether the payload is an Error */
export function isError(payload: unknown): payload is Error {
  return getType(payload) === 'Error' || payload instanceof Error
}
