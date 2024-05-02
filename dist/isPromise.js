import { getType } from './getType.js';
/**
 * Returns whether the payload is a Promise
 *
 * @param {any} payload
 * @returns {payload is Promise<any>}
 */
export function isPromise(payload) {
    return getType(payload) === 'Promise';
}
