/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
export function isEmptyString(payload: any): payload is string {
  return payload === ''
}
