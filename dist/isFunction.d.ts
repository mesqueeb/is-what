export type AnyFunction = (...args: unknown[]) => unknown;
/** Returns whether the payload is a function (regular or async) */
export declare function isFunction(payload: unknown): payload is AnyFunction;
