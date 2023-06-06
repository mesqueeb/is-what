import { getType } from './getType.js'

/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */
export function isSymbol(payload: any): payload is symbol {
  return getType(payload) === 'Symbol'
}
