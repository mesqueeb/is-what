import { getType } from './getType.js'

/**
 * Returns whether the payload is a File
 *
 * @param {*} payload
 * @returns {payload is File}
 */
export function isFile(payload: any): payload is File {
  return getType(payload) === 'File'
}
