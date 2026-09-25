import { isArray } from './isArray.js'

/** Returns whether the payload is a an empty array */
export function isEmptyArray(payload: unknown): payload is [] {
  return isArray(payload) && payload.length === 0
}
