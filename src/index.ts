
/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
export function getType (payload: any): string {
  return Object.prototype.toString.call(payload).slice(8, -1)
}

/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
export function isUndefined (payload: any): payload is undefined {
  return getType(payload) === 'Undefined'
}

/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */
export function isNull (payload: any): payload is null {
  return getType(payload) === 'Null'
}

/**
 * Returns whether the payload is an object
 *
 * @param {*} payload
 * @returns {payload is object}
 */
export function isObject (payload: any): payload is object {
  return getType(payload) === 'Object'
}

/**
 * Returns whether the payload is a function
 *
 * @param {*} payload
 * @returns {payload is Function}
 */
export function isFunction (payload: any): payload is Function {
  return getType(payload) === 'Function'
}

/**
 * Returns whether the payload is an array
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
export function isArray (payload: any): payload is any[] {
  return getType(payload) === 'Array'
}

/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
export function isString (payload: any): payload is string {
  return getType(payload) === 'String'
}

/**
 * Returns whether the payload is a number
 *
 * This will return false for NaN
 *
 * @param {*} payload
 * @returns {payload is number}
 */
export function isNumber (payload: any): payload is number {
  return (getType(payload) === 'Number' && !isNaN(payload))
}

/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
export function isBoolean (payload: any): payload is boolean {
  return getType(payload) === 'Boolean'
}

/**
 * Returns whether the payload is a regular expression
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
export function isRegExp (payload: any): payload is RegExp {
  return getType(payload) === 'RegExp'
}
/**
 * Returns whether the payload is a date, and that the date is Valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */
export function isDate (payload: any): payload is Date {
  return (getType(payload) === 'Date' && !isNaN(payload))
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
export function isType<T extends Function> (payload: any, type: T): payload is T {
  if (!(type instanceof Function)) {
    throw new TypeError('Type must be a function')
  }
  if (!type.hasOwnProperty('prototype')) {
    throw new TypeError('Type is not a class')
  }
  // Classes usually have names (as functions usually have names)
  const name: string | undefined | null = (<any>type).name
  return (getType(payload) === name) || Boolean(payload && (payload.constructor === type))
}
