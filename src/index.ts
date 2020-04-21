/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
export function getType (payload: unknown): string {
  return Object.prototype.toString.call(payload).slice(8, -1)
}

/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
export function isUndefined (payload: unknown): payload is undefined {
  return getType(payload) === 'Undefined'
}

/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */
export function isNull (payload: unknown): payload is null {
  return getType(payload) === 'Null'
}

/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: unknown}}
 */
export function isPlainObject (payload: unknown): payload is { [key: string]: unknown } {
  if (getType(payload) !== 'Object') return false
  return payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype
}

/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: unknown}}
 */
export function isObject (payload: unknown): payload is { [key: string]: unknown } {
  return isPlainObject(payload)
}

/**
 * Returns whether the payload is an unknown kind of object (including special classes or objects with different prototypes)
 *
 * @param {*} payload
 * @returns {payload is {[key: string]: unknown}}
 */
export function isAnyObject (payload: unknown): payload is { [key: string]: unknown } {
  return getType(payload) === 'Object'
}

/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: unknown}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */
export function isObjectLike<T extends object> (payload: unknown): payload is T {
  return isAnyObject(payload)
}

/**
 * Returns whether the payload is a function
 *
 * @param {*} payload
 * @returns {payload is Function}
 */
export function isFunction (payload: unknown): payload is Function {
  return getType(payload) === 'Function'
}

/**
 * Returns whether the payload is an array
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
export function isArray (payload: unknown): payload is unknown[] {
  return getType(payload) === 'Array'
}

/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
export function isString (payload: unknown): payload is string {
  return getType(payload) === 'String'
}

/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
export function isFullString (payload: unknown): payload is string {
  return isString(payload) && payload !== ''
}

/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
export function isEmptyString (payload: unknown): payload is string {
  return payload === ''
}

/**
 * Returns whether the payload is a number
 *
 * This will return false for NaN
 *
 * @param {*} payload
 * @returns {payload is number}
 */
export function isNumber (payload: unknown): payload is number {
  return getType(payload) === 'Number' && !isNaN(payload as any)
}

/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
export function isBoolean (payload: unknown): payload is boolean {
  return getType(payload) === 'Boolean'
}

/**
 * Returns whether the payload is a regular expression (RegExp)
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
export function isRegExp (payload: unknown): payload is RegExp {
  return getType(payload) === 'RegExp'
}

/**
 * Returns whether the payload is a Map
 *
 * @param {*} payload
 * @returns {payload is Map}
 */
export function isMap (payload: unknown): payload is Map<unknown, unknown> {
  return getType(payload) === 'Map'
}

/**
 * Returns whether the payload is a WeakMap
 *
 * @param {*} payload
 * @returns {payload is WeakMap}
 */
export function isWeakMap (payload: unknown): payload is WeakMap<any, unknown> {
  return getType(payload) === 'WeakMap'
}

/**
 * Returns whether the payload is a Set
 *
 * @param {*} payload
 * @returns {payload is Set}
 */
export function isSet (payload: unknown): payload is Set<unknown> {
  return getType(payload) === 'Set'
}

/**
 * Returns whether the payload is a WeakSet
 *
 * @param {*} payload
 * @returns {payload is WeakSet}
 */
export function isWeakSet (payload: unknown): payload is WeakSet<any> {
  return getType(payload) === 'WeakSet'
}

/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */
export function isSymbol (payload: unknown): payload is symbol {
  return getType(payload) === 'Symbol'
}

/**
 * Returns whether the payload is a Date, and that the date is valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */
export function isDate (payload: unknown): payload is Date {
  return getType(payload) === 'Date' && !isNaN(payload as any)
}

/**
 * Returns whether the payload is a Blob
 *
 * @param {*} payload
 * @returns {payload is Blob}
 */
export function isBlob (payload: unknown): payload is Blob {
  return getType(payload) === 'Blob'
}

/**
 * Returns whether the payload is a File
 *
 * @param {*} payload
 * @returns {payload is File}
 */
export function isFile (payload: unknown): payload is File {
  return getType(payload) === 'File'
}

/**
 * Returns whether the payload is a Promise
 *
 * @param {*} payload
 * @returns {payload is Promise}
 */
export function isPromise (payload: unknown): payload is Promise<unknown> {
  return getType(payload) === 'Promise'
}

/**
 * Returns whether the payload is an Error
 *
 * @param {*} payload
 * @returns {payload is Error}
 */
export function isError (payload: unknown): payload is Error {
  return getType(payload) === 'Error'
}

/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
 * @returns {(payload is boolean | null | undefined | number | string | symbol)}
 */
export function isPrimitive (
  payload: unknown
): payload is boolean | null | undefined | number | string | symbol {
  return (
    isBoolean(payload) ||
    isNull(payload) ||
    isUndefined(payload) ||
    isNumber(payload) ||
    isString(payload) ||
    isSymbol(payload)
  )
}

/**
 * Returns true whether the payload is null or undefined
 *
 * @param {*} payload
 * @returns {(payload is null | undefined)}
 */
export function isNullOrUndefined (payload: unknown): payload is null | undefined {
  return isNull(payload) || isUndefined(payload)
}

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
export function isType<T extends Function> (payload: unknown, type: T): payload is T {
  if (!(type instanceof Function)) {
    throw new TypeError('Type must be a function')
  }
  if (!Object.prototype.hasOwnProperty.call(type, 'prototype')) {
    throw new TypeError('Type is not a class')
  }
  // Classes usually have names (as functions usually have names)
  const name: string | undefined | null = (type as any).name
  return getType(payload) === name || Boolean(payload && payload.constructor === type)
}
