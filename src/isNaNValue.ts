import { getType } from './getType.js'

/**
 * Returns whether the payload is literally the value `NaN` (it's `NaN` and also a `number`)
 *
 * @param {any} payload
 * @returns {payload is typeof NaN}
 */
export function isNaNValue(payload: any): payload is typeof NaN {
  return getType(payload) === 'Number' && isNaN(payload)
}
