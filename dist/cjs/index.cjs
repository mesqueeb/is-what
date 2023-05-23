'use strict';

function getType(payload) {
  return Object.prototype.toString.call(payload).slice(8, -1);
}
function isUndefined(payload) {
  return getType(payload) === "Undefined";
}
function isNull(payload) {
  return getType(payload) === "Null";
}
function isPlainObject(payload) {
  if (getType(payload) !== "Object")
    return false;
  const prototype = Object.getPrototypeOf(payload);
  return prototype.constructor === Object && prototype === Object.prototype;
}
function isObject(payload) {
  return isPlainObject(payload);
}
function isEmptyObject(payload) {
  return isPlainObject(payload) && Object.keys(payload).length === 0;
}
function isFullObject(payload) {
  return isPlainObject(payload) && Object.keys(payload).length > 0;
}
function isAnyObject(payload) {
  return getType(payload) === "Object";
}
function isObjectLike(payload) {
  return isAnyObject(payload);
}
function isFunction(payload) {
  return typeof payload === "function";
}
function isArray(payload) {
  return getType(payload) === "Array";
}
function isFullArray(payload) {
  return isArray(payload) && payload.length > 0;
}
function isEmptyArray(payload) {
  return isArray(payload) && payload.length === 0;
}
function isString(payload) {
  return getType(payload) === "String";
}
function isFullString(payload) {
  return isString(payload) && payload !== "";
}
function isEmptyString(payload) {
  return payload === "";
}
function isNumber(payload) {
  return getType(payload) === "Number" && !isNaN(payload);
}
function isPositiveNumber(payload) {
  return isNumber(payload) && payload > 0;
}
function isNegativeNumber(payload) {
  return isNumber(payload) && payload < 0;
}
function isBoolean(payload) {
  return getType(payload) === "Boolean";
}
function isRegExp(payload) {
  return getType(payload) === "RegExp";
}
function isMap(payload) {
  return getType(payload) === "Map";
}
function isWeakMap(payload) {
  return getType(payload) === "WeakMap";
}
function isSet(payload) {
  return getType(payload) === "Set";
}
function isWeakSet(payload) {
  return getType(payload) === "WeakSet";
}
function isSymbol(payload) {
  return getType(payload) === "Symbol";
}
function isDate(payload) {
  return getType(payload) === "Date" && !isNaN(payload);
}
function isBlob(payload) {
  return getType(payload) === "Blob";
}
function isFile(payload) {
  return getType(payload) === "File";
}
function isPromise(payload) {
  return getType(payload) === "Promise";
}
function isError(payload) {
  return getType(payload) === "Error";
}
function isNaNValue(payload) {
  return getType(payload) === "Number" && isNaN(payload);
}
function isPrimitive(payload) {
  return isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
}
const isNullOrUndefined = isOneOf(isNull, isUndefined);
function isOneOf(a, b, c, d, e) {
  return (value) => a(value) || b(value) || !!c && c(value) || !!d && d(value) || !!e && e(value);
}
function isType(payload, type) {
  if (!(type instanceof Function)) {
    throw new TypeError("Type must be a function");
  }
  if (!Object.prototype.hasOwnProperty.call(type, "prototype")) {
    throw new TypeError("Type is not a class");
  }
  const name = type.name;
  return getType(payload) === name || Boolean(payload && payload.constructor === type);
}

exports.getType = getType;
exports.isAnyObject = isAnyObject;
exports.isArray = isArray;
exports.isBlob = isBlob;
exports.isBoolean = isBoolean;
exports.isDate = isDate;
exports.isEmptyArray = isEmptyArray;
exports.isEmptyObject = isEmptyObject;
exports.isEmptyString = isEmptyString;
exports.isError = isError;
exports.isFile = isFile;
exports.isFullArray = isFullArray;
exports.isFullObject = isFullObject;
exports.isFullString = isFullString;
exports.isFunction = isFunction;
exports.isMap = isMap;
exports.isNaNValue = isNaNValue;
exports.isNegativeNumber = isNegativeNumber;
exports.isNull = isNull;
exports.isNullOrUndefined = isNullOrUndefined;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isObjectLike = isObjectLike;
exports.isOneOf = isOneOf;
exports.isPlainObject = isPlainObject;
exports.isPositiveNumber = isPositiveNumber;
exports.isPrimitive = isPrimitive;
exports.isPromise = isPromise;
exports.isRegExp = isRegExp;
exports.isSet = isSet;
exports.isString = isString;
exports.isSymbol = isSymbol;
exports.isType = isType;
exports.isUndefined = isUndefined;
exports.isWeakMap = isWeakMap;
exports.isWeakSet = isWeakSet;
