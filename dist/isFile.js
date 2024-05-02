import { getType } from './getType.js';
/**
 * Returns whether the payload is a File
 *
 * @param {any} payload
 * @returns {payload is File}
 */
export function isFile(payload) {
    return getType(payload) === 'File';
}
