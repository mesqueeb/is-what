type AnyFunction<A extends any[] = any[], R = unknown> = (...args: A) => R

function isFunction(x: unknown): x is AnyFunction {
  return typeof x === 'function'
}

export default isFunction
export type { AnyFunction }
