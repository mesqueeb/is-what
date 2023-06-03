import { getType } from './getType.js'

/**
 * Returns whether the payload is a Blob
 *
 * @param {*} payload
 * @returns {payload is Blob}
 */
export function isBlob(payload: any): payload is Blob {
  return getType(payload) === 'Blob'
}
