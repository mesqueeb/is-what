import { isNull } from './isNull.js'
import { isOneOf } from './isOneOf.js'
import { isUndefined } from './isUndefined.js'

/**
 * Returns true whether the payload is null or undefined
 *
 * @param {*} payload
 * @returns {(payload is null | undefined)}
 */
export const isNullOrUndefined = isOneOf(isNull, isUndefined)
