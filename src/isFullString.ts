import { isString } from './isString.js'

/** Returns whether the payload is a string, BUT returns false for '' */
export function isFullString(payload: unknown): payload is string {
  return isString(payload) && payload !== ''
}
