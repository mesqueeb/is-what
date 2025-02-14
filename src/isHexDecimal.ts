import { isString } from './isString.js'

/**
 * Checks if a string is a valid hexadecimal string. If a length is provided, it also checks that
 * the string has that length.
 */
export function isHexDecimal(payload: unknown, length?: number): payload is string {
  if (!isString(payload)) return false
  if (!/^[0-9a-fA-F]+$/.test(payload)) return false
  return length === undefined || payload.length === length
}
