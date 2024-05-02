import { isArray } from './isArray.js';
/**
 * Returns whether the payload is a an empty array
 *
 * @param {any} payload
 * @returns {payload is []}
 */
export function isEmptyArray(payload) {
    return isArray(payload) && payload.length === 0;
}
