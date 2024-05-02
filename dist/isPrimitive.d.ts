/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String
 * | Symbol)
 *
 * @param {any} payload
 * @returns {(payload is boolean | null | undefined | number | string | symbol)}
 */
export declare function isPrimitive(payload: any): payload is boolean | null | undefined | number | string | symbol;
