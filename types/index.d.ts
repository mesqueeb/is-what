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
 * Returns whether the payload is an object
 *
 * @param {*} payload
 * @returns {payload is object}
 */
declare function isObject(payload: any): payload is object;
/**
 * Returns whether the payload is a function
 *
 * @param {*} payload
 * @returns {payload is Function}
 */
declare function isFunction(payload: any): payload is Function;
/**
 * Returns whether the payload is an array
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
declare function isArray(payload: any): payload is any[];
/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
declare function isString(payload: any): payload is string;
/**
 * Returns whether the payload is a number
 *
 * This will return false for NaN
 *
 * @param {*} payload
 * @returns {payload is number}
 */
declare function isNumber(payload: any): payload is number;
/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
declare function isBoolean(payload: any): payload is boolean;
/**
 * Returns whether the payload is a regular expression
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
declare function isRegExp(payload: any): payload is RegExp;
/**
 * Returns whether the payload is a date
 *
 * @param {*} payload
 * @returns {payload is Date}
 */
declare function isDate(payload: any): payload is Date;
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
declare function isType<T extends Function>(payload: any, type: T): payload is T;
export { getType, isUndefined, isNull, isObject, isFunction, isArray, isString, isNumber, isBoolean, isRegExp, isDate, isType };
