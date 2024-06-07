export type AnyFunction = (...args: any[]) => any

/** Returns whether the payload is a function (regular or async) */
export function isFunction(payload: unknown): payload is AnyFunction {
  return typeof payload === 'function'
}
