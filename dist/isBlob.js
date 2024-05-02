import { getType } from './getType.js';
/**
 * Returns whether the payload is a Blob
 *
 * @param {any} payload
 * @returns {payload is Blob}
 */
export function isBlob(payload) {
    return getType(payload) === 'Blob';
}
