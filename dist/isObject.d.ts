import { PlainObject } from './isPlainObject.js';
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects
 * with other prototypes)
 *
 * @param {any} payload
 * @returns {payload is PlainObject}
 */
export declare function isObject(payload: any): payload is PlainObject;
