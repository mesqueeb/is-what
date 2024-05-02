import { isPlainObject } from './isPlainObject.js';
/**
 * Returns whether the payload is a an empty object (excluding special classes or objects with other
 * prototypes)
 *
 * @param {any} payload
 * @returns {payload is { [K in any]: never }}
 */
export function isEmptyObject(payload) {
    return isPlainObject(payload) && Object.keys(payload).length === 0;
}
