import { getType } from './getType.js';
/**
 * Returns whether the payload is an any kind of object (including special classes or objects with
 * different prototypes)
 *
 * @param {any} payload
 * @returns {payload is PlainObject}
 */
export function isAnyObject(payload) {
    return getType(payload) === 'Object';
}
