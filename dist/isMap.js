import { getType } from './getType.js';
/**
 * Returns whether the payload is a Map
 *
 * @param {any} payload
 * @returns {payload is Map<any, any>}
 */
export function isMap(payload) {
    return getType(payload) === 'Map';
}
