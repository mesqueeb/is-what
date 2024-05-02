export type PlainObject = Record<string | number | symbol, any>;
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects
 * with other prototypes)
 *
 * @param {any} payload
 * @returns {payload is PlainObject}
 */
export declare function isPlainObject(payload: any): payload is PlainObject;
