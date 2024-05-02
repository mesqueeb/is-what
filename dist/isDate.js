import { getType } from './getType.js';
/**
 * Returns whether the payload is a Date, and that the date is valid
 *
 * @param {any} payload
 * @returns {payload is Date}
 */
export function isDate(payload) {
    return getType(payload) === 'Date' && !isNaN(payload);
}
