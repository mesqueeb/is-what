import { getType } from './getType.js'

/** Returns whether the payload is an integer number */
export function isInteger(payload: unknown): payload is number {
  return getType(payload) === 'Number' && Number.isInteger(payload as number)
}
