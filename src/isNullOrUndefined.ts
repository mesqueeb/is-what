import { isNull } from './isNull'
import { isOneOf } from './isOneOf'
import { isUndefined } from './isUndefined'

/**
 * Returns true whether the payload is null or undefined
 *
 * @param {*} payload
 * @returns {(payload is null | undefined)}
 */
export const isNullOrUndefined = isOneOf(isNull, isUndefined)
