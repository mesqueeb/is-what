import { getType } from './getType.js';
/**
 * Returns whether the payload is an array
 *
 * @param {any} payload
 * @returns {payload is any[]}
 */
export function isArray(payload) {
    return getType(payload) === 'Array';
}
