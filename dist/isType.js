import { getType } from './getType.js';
/**
 * Does a generic check to check that the given payload is of a given type. In cases like Number, it
 * will return true for NaN as NaN is a Number (thanks javascript!); It will, however, differentiate
 * between object and null
 *
 * @throws {TypeError} Will throw type error if type is an invalid type
 */
export function isType(payload, type) {
    if (!(type instanceof Function)) {
        throw new TypeError('Type must be a function');
    }
    if (!Object.prototype.hasOwnProperty.call(type, 'prototype')) {
        throw new TypeError('Type is not a class');
    }
    // Classes usually have names (as functions usually have names)
    const name = type.name;
    return getType(payload) === name || Boolean(payload && payload.constructor === type);
}
