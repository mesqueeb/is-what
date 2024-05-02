import { getType } from './getType.js';
/**
 * Returns whether the payload is a regular expression (RegExp)
 *
 * @param {any} payload
 * @returns {payload is RegExp}
 */
export function isRegExp(payload) {
    return getType(payload) === 'RegExp';
}
