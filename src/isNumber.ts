import { getType } from './getType.js'

/**
 * Returns whether the payload is a number (but not NaN)
 *
 * This will return `false` for `NaN`!!
 */
export function isNumber(payload: unknown): payload is number {
  return getType(payload) === 'Number' && !isNaN(payload as unknown as number)
}
