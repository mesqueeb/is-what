import { getType } from './getType.js'

/** Returns whether the payload is a Date, and that the date is valid */
export function isDate(payload: unknown): payload is Date {
  return getType(payload) === 'Date' && !Number.isNaN(payload as unknown as number)
}
