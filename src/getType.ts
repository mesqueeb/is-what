import type { GlobalClassName } from './isInstanceOf.js'

type CommonTypeName = GlobalClassName | 'Null' | 'Undefined'

/**
 * Returns the object type of the given payload. This uses the default `Object` `toString()` method
 * to get the "type" of an object. This will **respect** the `Symbol.toStringTag` property if it is
 * set on the object.
 *
 * ⚠️ This will **work** with **all** types of objects, including primitives, `null` and
 * `undefined`, but `null` will be `"Null"` and `undefined` will be `"Undefined"`. 🤷‍♂️
 *
 * ℹ All user-defined classes will be `"Object"` unless they have a `Symbol.toStringTag` that
 * overrides the default behavior.
 *
 * 💻 This function works across realms! Since it uses the native `Object#toString()` function and
 * returns a raw primitive string, it will work across `<iframe>`s and `open()`-ed `WindowProxy`
 * realms.
 *
 * 📛 Be warned that some user-defined classes may have the same `Symbol.toStringTag` as native
 * objects! For instance, `getType(new File()) === "File"`, but some other JavaScript package might
 * define a `File` class that has the same `Symbol.toStringTag` as the native `File` class. This is
 * a limitation of the `Symbol.toStringTag` system. If possible, it's recommended to use one of the
 * more robust brand-checking functions like `isFile()` or `isBlob()` from this `is-what`
 * collection.
 *
 * @example
 *   console.log(getType([]))
 *   //=> 'Array'
 *   console.log(getType({}))
 *   //=> 'Object'
 *   console.log(getType(new (class {})()))
 *   //=> 'Object'
 *   console.log(getType(new Date()))
 *   //=> 'Date'
 *   console.log(getType(null))
 *   //=> 'Null'
 *   console.log(getType(undefined))
 *   //=> 'Undefined'
 *   console.log(getType('hi'))
 *   //=> 'String'
 *   console.log(getType(1))
 *   //=> 'Number'
 *   console.log(getType(() => {}))
 *   //=> 'Function'
 *   console.log(getType(function* () {}))
 *   //=> 'GeneratorFunction'
 *
 * @param x The raw value to get the type of. This can be anything.
 * @returns The type of the given value as a string. Usually the `Symbol.toStringTag` of the
 *   `thing`.
 */
function getType(x: any): CommonTypeName | string {
  return Object.prototype.toString.call(x).slice(8, -1)
}

export default getType
export type { CommonTypeName }
