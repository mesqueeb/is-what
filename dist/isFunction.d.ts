export type AnyFunction = (...args: any[]) => any;
/**
 * Returns whether the payload is a function (regular or async)
 *
 * @param {any} payload
 * @returns {payload is AnyFunction}
 */
export declare function isFunction(payload: any): payload is AnyFunction;
