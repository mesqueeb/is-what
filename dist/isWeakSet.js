import { getType } from './getType.js';
/**
 * Returns whether the payload is a WeakSet
 *
 * @param {any} payload
 * @returns {payload is WeakSet<any>}
 */
export function isWeakSet(payload) {
    return getType(payload) === 'WeakSet';
}
