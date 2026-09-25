import { getType } from './getType.js'

/** Returns whether the payload is a File */
export function isFile(payload: unknown): payload is File {
  return getType(payload) === 'File'
}
