import { isString } from './isString.js';
/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {any} payload
 * @returns {payload is string}
 */
export function isFullString(payload) {
    return isString(payload) && payload !== '';
}
