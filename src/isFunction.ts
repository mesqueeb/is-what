export type AnyFunction = (...args: unknown[]) => unknown

/** Returns whether the payload is a function (regular or async) */
export function isFunction(payload: unknown): payload is AnyFunction {
  return typeof payload === 'function'
}
