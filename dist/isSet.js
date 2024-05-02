import { getType } from './getType.js';
/**
 * Returns whether the payload is a Set
 *
 * @param {any} payload
 * @returns {payload is Set<any>}
 */
export function isSet(payload) {
    return getType(payload) === 'Set';
}
