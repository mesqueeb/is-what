/**
 * Returns whether the payload is a function (regular or async)
 *
 * @param {any} payload
 * @returns {payload is AnyFunction}
 */
export function isFunction(payload) {
    return typeof payload === 'function';
}
