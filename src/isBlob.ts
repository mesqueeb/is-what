import { getType } from "./getType";

/**
 * Returns whether the payload is a Blob
 *
 * @param {*} payload
 * @returns {payload is Blob}
 */
export function isBlob(payload: any): payload is Blob {
  return getType(payload) === 'Blob'
}
