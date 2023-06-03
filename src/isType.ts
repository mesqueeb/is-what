import type { AnyFunction } from "./isFunction.js";

type AnyClass<A extends any[] = any[], R extends object = object> = new (
  ...args: A
) => R;

/**
 * Checks that the given value is **exactly** the given type (with some
 * exceptions across realms). This is equivalent to `x?.constructor === type ||
 * Object.prototype.toString.call(x).slice(8, -1) === type.name`.
 *
 * ℹ This _works_ across realms, but it's not perfect. For instance,
 * user-defined classes will use the default `Symbol.toStringTag` of `"Object"`
 * which means that `isType(iframe.contentWindow.hello, Object)` will _return
 * `true`_ even though `iframe.contentWindow.hello` is actually a `Hello`
 * instance from another realm! This is a limitation of the `Symbol.toStringTag`
 * system. If possible, it's recommended to use one of the more specific
 * type-checking functions like `isFile()` or `isBlob()` from this `is-what`
 * package.
 *
 * ⚠️ This check will return `true` for objects that were created with
 * `Object.create()` but weren't initialized!
 *
 * @example
 *   class Hello {}
 *   console.log(isType(new Hello(), Hello));
 *   //=> true
 *   console.log(isType(Object.create(Hello.prototype), Hello));
 *   //=> true
 *   console.log(isType({}, Hello));
 *   //=> false
 *   console.log(isType(new Hello(), Object));
 *   //=> false
 *   console.log(isType({}, Object));
 *   //=> true
 *   console.log(isType(1, Number));
 *   //=> true
 *
 * @throws {TypeError} Will throw a `TypeError` if `type` is not a class
 */
function isType<T extends AnyFunction | AnyClass>(x: unknown, type: T): x is T {
  if (typeof type !== "function" || !Object.hasOwn(type, "prototype")) {
    throw new TypeError(`${type} is not a class`);
  }
  return (
    x instanceof type ||
    Object.prototype.toString.call(x).slice(8, -1) === type.name
  );
}

export default isType;
export type { AnyClass };
