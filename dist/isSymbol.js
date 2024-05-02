import { getType } from './getType.js';
/**
 * Returns whether the payload is a Symbol
 *
 * @param {any} payload
 * @returns {payload is symbol}
 */
export function isSymbol(payload) {
    return getType(payload) === 'Symbol';
}
