type AnyFunction = (...args: any[]) => any;
type AnyAsyncFunction = (...args: any[]) => Promise<any>;
type AnyClass = new (...args: any[]) => any;
type PlainObject = Record<string | number | symbol, any>;
type TypeGuard<A, B extends A> = (payload: A) => payload is B;
/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
declare function getType(payload: any): string;
/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
declare function isUndefined(payload: any): payload is undefined;
/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */
declare function isNull(payload: any): payload is null;
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
declare function isPlainObject(payload: any): payload is PlainObject;
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
declare function isObject(payload: any): payload is PlainObject;
/**
 * Returns whether the payload is a an empty object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is { [K in any]: never }}
 */
declare function isEmptyObject(payload: any): payload is {
    [K in any]: never;
};
/**
 * Returns whether the payload is a an empty object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
declare function isFullObject(payload: any): payload is PlainObject;
/**
 * Returns whether the payload is an any kind of object (including special classes or objects with different prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
declare function isAnyObject(payload: any): payload is PlainObject;
/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: any}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */
declare function isObjectLike<T extends PlainObject>(payload: any): payload is T;
/**
 * Returns whether the payload is a function (regular or async)
 *
 * @param {*} payload
 * @returns {payload is AnyFunction}
 */
declare function isFunction(payload: any): payload is AnyFunction;
/**
 * Returns whether the payload is an array
 *
 * @param {any} payload
 * @returns {payload is any[]}
 */
declare function isArray(payload: any): payload is any[];
/**
 * Returns whether the payload is a an array with at least 1 item
 *
 * @param {*} payload
 * @returns {payload is any[]}
 */
declare function isFullArray(payload: any): payload is any[];
/**
 * Returns whether the payload is a an empty array
 *
 * @param {*} payload
 * @returns {payload is []}
 */
declare function isEmptyArray(payload: any): payload is [];
/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
declare function isString(payload: any): payload is string;
/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
declare function isFullString(payload: any): payload is string;
/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
declare function isEmptyString(payload: any): payload is string;
/**
 * Returns whether the payload is a number (but not NaN)
 *
 * This will return `false` for `NaN`!!
 *
 * @param {*} payload
 * @returns {payload is number}
 */
declare function isNumber(payload: any): payload is number;
/**
 * Returns whether the payload is a positive number (but not 0)
 *
 * @param {*} payload
 * @returns {payload is number}
 */
declare function isPositiveNumber(payload: any): payload is number;
/**
 * Returns whether the payload is a negative number (but not 0)
 *
 * @param {*} payload
 * @returns {payload is number}
 */
declare function isNegativeNumber(payload: any): payload is number;
/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
declare function isBoolean(payload: any): payload is boolean;
/**
 * Returns whether the payload is a regular expression (RegExp)
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
declare function isRegExp(payload: any): payload is RegExp;
/**
 * Returns whether the payload is a Map
 *
 * @param {*} payload
 * @returns {payload is Map<any, any>}
 */
declare function isMap(payload: any): payload is Map<any, any>;
/**
 * Returns whether the payload is a WeakMap
 *
 * @param {*} payload
 * @returns {payload is WeakMap<any, any>}
 */
declare function isWeakMap(payload: any): payload is WeakMap<any, any>;
/**
 * Returns whether the payload is a Set
 *
 * @param {*} payload
 * @returns {payload is Set<any>}
 */
declare function isSet(payload: any): payload is Set<any>;
/**
 * Returns whether the payload is a WeakSet
 *
 * @param {*} payload
 * @returns {payload is WeakSet<any>}
 */
declare function isWeakSet(payload: any): payload is WeakSet<any>;
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */
declare function isSymbol(payload: any): payload is symbol;
/**
 * Returns whether the payload is a Date, and that the date is valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */
declare function isDate(payload: any): payload is Date;
/**
 * Returns whether the payload is a Blob
 *
 * @param {*} payload
 * @returns {payload is Blob}
 */
declare function isBlob(payload: any): payload is Blob;
/**
 * Returns whether the payload is a File
 *
 * @param {*} payload
 * @returns {payload is File}
 */
declare function isFile(payload: any): payload is File;
/**
 * Returns whether the payload is a Promise
 *
 * @param {*} payload
 * @returns {payload is Promise<any>}
 */
declare function isPromise(payload: any): payload is Promise<any>;
/**
 * Returns whether the payload is an Error
 *
 * @param {*} payload
 * @returns {payload is Error}
 */
declare function isError(payload: any): payload is Error;
/**
 * Returns whether the payload is literally the value `NaN` (it's `NaN` and also a `number`)
 *
 * @param {*} payload
 * @returns {payload is typeof NaN}
 */
declare function isNaNValue(payload: any): payload is typeof NaN;
/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
 * @returns {(payload is boolean | null | undefined | number | string | symbol)}
 */
declare function isPrimitive(payload: any): payload is boolean | null | undefined | number | string | symbol;
/**
 * Returns true whether the payload is null or undefined
 *
 * @param {*} payload
 * @returns {(payload is null | undefined)}
 */
declare const isNullOrUndefined: TypeGuard<any, null | undefined>;
declare function isOneOf<A, B extends A, C extends A>(a: TypeGuard<A, B>, b: TypeGuard<A, C>): TypeGuard<A, B | C>;
declare function isOneOf<A, B extends A, C extends A, D extends A>(a: TypeGuard<A, B>, b: TypeGuard<A, C>, c: TypeGuard<A, D>): TypeGuard<A, B | C | D>;
declare function isOneOf<A, B extends A, C extends A, D extends A, E extends A>(a: TypeGuard<A, B>, b: TypeGuard<A, C>, c: TypeGuard<A, D>, d: TypeGuard<A, E>): TypeGuard<A, B | C | D | E>;
declare function isOneOf<A, B extends A, C extends A, D extends A, E extends A, F extends A>(a: TypeGuard<A, B>, b: TypeGuard<A, C>, c: TypeGuard<A, D>, d: TypeGuard<A, E>, e: TypeGuard<A, F>): TypeGuard<A, B | C | D | E | F>;
/**
 * Does a generic check to check that the given payload is of a given type.
 * In cases like Number, it will return true for NaN as NaN is a Number (thanks javascript!);
 * It will, however, differentiate between object and null
 *
 * @template T
 * @param {*} payload
 * @param {T} type
 * @throws {TypeError} Will throw type error if type is an invalid type
 * @returns {payload is T}
 */
declare function isType<T extends AnyFunction | AnyClass>(payload: any, type: T): payload is T;

export { AnyAsyncFunction, AnyClass, AnyFunction, PlainObject, getType, isAnyObject, isArray, isBlob, isBoolean, isDate, isEmptyArray, isEmptyObject, isEmptyString, isError, isFile, isFullArray, isFullObject, isFullString, isFunction, isMap, isNaNValue, isNegativeNumber, isNull, isNullOrUndefined, isNumber, isObject, isObjectLike, isOneOf, isPlainObject, isPositiveNumber, isPrimitive, isPromise, isRegExp, isSet, isString, isSymbol, isType, isUndefined, isWeakMap, isWeakSet };
