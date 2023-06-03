import { isBoolean } from './isBoolean'
import { isNull } from './isNull'
import { isNumber } from './isNumber'
import { isString } from './isString'
import { isSymbol } from './isSymbol'
import { isUndefined } from './isUndefined'

/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
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
