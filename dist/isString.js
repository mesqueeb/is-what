import { getType } from './getType.js';
/**
 * Returns whether the payload is a string
 *
 * @param {any} payload
 * @returns {payload is string}
 */
export function isString(payload) {
    return getType(payload) === 'String';
}
