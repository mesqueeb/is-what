import { isBoolean } from './isBoolean.js'
import { isNull } from './isNull.js'
import { isNumber } from './isNumber.js'
import { isString } from './isString.js'
import { isSymbol } from './isSymbol.js'
import { isUndefined } from './isUndefined.js'

/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String
 * | Symbol)
 *
 * @param {any} payload
 * @returns {(payload is boolean | null | undefined | number | string | symbol)}
 */
export function isPrimitive(
  payload: any
): payload is boolean | null | undefined | number | string | symbol {
  return (
    isBoolean(payload) ||
    isNull(payload) ||
    isUndefined(payload) ||
    isNumber(payload) ||
    isString(payload) ||
    isSymbol(payload)
  )
}
