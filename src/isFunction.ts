export type AnyFunction = (...args: any[]) => any

/**
 * Returns whether the payload is a function (regular or async)
 *
 * @param {*} payload
 * @returns {payload is AnyFunction}
 */
export function isFunction(payload: any): payload is AnyFunction {
  return typeof payload === 'function'
}
