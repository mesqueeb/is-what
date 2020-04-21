/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
export declare function getType(payload: unknown): string;
/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
export declare function isUndefined(payload: unknown): payload is undefined;
/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */
export declare function isNull(payload: unknown): payload is null;
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: unknown}}
 */
export declare function isPlainObject(payload: unknown): payload is {
    [key: string]: unknown;
};
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: unknown}}
 */
export declare function isObject(payload: unknown): payload is {
    [key: string]: unknown;
};
/**
 * Returns whether the payload is an unknown kind of object (including special classes or objects with different prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: unknown}}
 */
export declare function isAnyObject(payload: unknown): payload is {
    [key: string]: unknown;
};
/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: unknown}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */
export declare function isObjectLike<T extends object>(payload: unknown): payload is T;
/**
 * Returns whether the payload is a function
 *
 * @param {*} payload
 * @returns {payload is Function}
 */
export declare function isFunction(payload: unknown): payload is Function;
/**
 * Returns whether the payload is an array
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
export declare function isArray(payload: unknown): payload is unknown[];
/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
export declare function isString(payload: unknown): payload is string;
/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
export declare function isFullString(payload: unknown): payload is string;
/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
export declare function isEmptyString(payload: unknown): payload is string;
/**
 * Returns whether the payload is a number
 *
 * This will return false for NaN
 *
 * @param {*} payload
 * @returns {payload is number}
 */
export declare function isNumber(payload: unknown): payload is number;
/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
export declare function isBoolean(payload: unknown): payload is boolean;
/**
 * Returns whether the payload is a regular expression (RegExp)
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
export declare function isRegExp(payload: unknown): payload is RegExp;
/**
 * Returns whether the payload is a Map
 *
 * @param {*} payload
 * @returns {payload is Map}
 */
export declare function isMap(payload: unknown): payload is Map<unknown, unknown>;
/**
 * Returns whether the payload is a WeakMap
 *
 * @param {*} payload
 * @returns {payload is WeakMap}
 */
export declare function isWeakMap(payload: unknown): payload is WeakMap<any, unknown>;
/**
 * Returns whether the payload is a Set
 *
 * @param {*} payload
 * @returns {payload is Set}
 */
export declare function isSet(payload: unknown): payload is Set<unknown>;
/**
 * Returns whether the payload is a WeakSet
 *
 * @param {*} payload
 * @returns {payload is WeakSet}
 */
export declare function isWeakSet(payload: unknown): payload is WeakSet<any>;
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */
export declare function isSymbol(payload: unknown): payload is symbol;
/**
 * Returns whether the payload is a Date, and that the date is valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */
export declare function isDate(payload: unknown): payload is Date;
/**
 * Returns whether the payload is a Blob
 *
 * @param {*} payload
 * @returns {payload is Blob}
 */
export declare function isBlob(payload: unknown): payload is Blob;
/**
 * Returns whether the payload is a File
 *
 * @param {*} payload
 * @returns {payload is File}
 */
export declare function isFile(payload: unknown): payload is File;
/**
 * Returns whether the payload is a Promise
 *
 * @param {*} payload
 * @returns {payload is Promise}
 */
export declare function isPromise(payload: unknown): payload is Promise<unknown>;
/**
 * Returns whether the payload is an Error
 *
 * @param {*} payload
 * @returns {payload is Error}
 */
export declare function isError(payload: unknown): payload is Error;
/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
 * @returns {(payload is boolean | null | undefined | number | string | symbol)}
 */
export declare function isPrimitive(payload: unknown): payload is boolean | null | undefined | number | string | symbol;
/**
 * Returns true whether the payload is null or undefined
 *
 * @param {*} payload
 * @returns {(payload is null | undefined)}
 */
export declare function isNullOrUndefined(payload: unknown): payload is null | undefined;
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
export declare function isType<T extends Function>(payload: unknown, type: T): payload is T;
