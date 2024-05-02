import { PlainObject } from './isPlainObject.js';
/**
 * Returns whether the payload is a an empty object (excluding special classes or objects with other
 * prototypes)
 *
 * @param {any} payload
 * @returns {payload is PlainObject}
 */
export declare function isFullObject(payload: any): payload is PlainObject;
