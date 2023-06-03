import { getType } from './getType.js'

/**
 * Returns whether the payload is a regular expression (RegExp)
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
export function isRegExp(payload: any): payload is RegExp {
  return getType(payload) === 'RegExp'
}
