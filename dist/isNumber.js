import { getType } from './getType.js';
/**
 * Returns whether the payload is a number (but not NaN)
 *
 * This will return `false` for `NaN`!!
 *
 * @param {any} payload
 * @returns {payload is number}
 */
export function isNumber(payload) {
    return getType(payload) === 'Number' && !isNaN(payload);
}
