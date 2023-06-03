import { isOneOf } from './isOneOf'

/**
 * Returns true whether the payload is null or undefined
 *
 * @param {*} payload
 * @returns {(payload is null | undefined)}
 */
export const isNullOrUndefined = isOneOf(isNull, isUndefined)
