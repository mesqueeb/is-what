/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable tree-shaking/no-side-effects-in-initialization */
/* eslint-disable @typescript-eslint/no-array-constructor */
import { test, expect } from 'vitest'

import {
  isError,
  isEmptyArray,
  isObject,
  isPlainObject,
  isAnyObject,
  isUndefined,
  isNull,
  isNullOrUndefined,
  isFunction,
  isArray,
  isString,
  isEmptyString,
  isFullString,
  isBoolean,
  isRegExp,
  isNumber,
  isPositiveNumber,
  isNegativeNumber,
  isDate,
  isSymbol,
  isPrimitive,
  isType,
  isMap,
  isWeakMap,
  isSet,
  isWeakSet,
  isFullArray,
  // isBlob,
  // isFile,
  isPromise,
  isNaNValue,
  isEmptyObject,
  isOneOf,
  isFullObject,
  isInstanceOf,
} from '../src/index'

// TODO: test isBlob
// test('isBlob', () => {
//   expect(isBlob(Blob)).toBe(false)
//   expect(isBlob(new Blob())).toBe(true)
// })

// TODO: test isFile
// test('isFile', () => {
//   expect(isFile(File)).toBe(false)
//   expect(isFile(new File([''], '', { type: 'text/html' }))).toBe(true)
// })

test('Basic true tests', () => {
  expect(isError(new Error(''))).toEqual(true)
  expect(isUndefined(undefined)).toEqual(true)
  expect(isNull(null)).toEqual(true)
  expect(isNullOrUndefined(null)).toEqual(true)
  expect(isNullOrUndefined(undefined)).toEqual(true)
  expect(isObject({})).toEqual(true)
  expect(isEmptyObject({})).toEqual(true)
  expect(isFullObject({ 0: '' })).toEqual(true)
  expect(isFullObject({ '': '' })).toEqual(true)
  expect(isObject(new Object())).toEqual(true)
  expect(isArray([])).toEqual(true)
  expect(isEmptyArray([])).toEqual(true)
  expect(isFullArray([''])).toEqual(true)
  expect(isArray(new Array())).toEqual(true)
  expect(isString('')).toEqual(true)
  expect(isString('_')).toEqual(true)
  expect(isEmptyString('')).toEqual(true)
  expect(isFullString(' ')).toEqual(true)
  expect(isBoolean(true)).toEqual(true)
  expect(isBoolean(false)).toEqual(true)
  expect(isRegExp(/./)).toEqual(true)
  expect(isRegExp(/./gi)).toEqual(true)
  expect(isNumber(0)).toEqual(true)
  expect(isNumber(1)).toEqual(true)
  expect(isDate(new Date())).toEqual(true)
  expect(isSymbol(Symbol())).toEqual(true)
  expect(isMap(new Map())).toEqual(true)
  expect(isWeakMap(new WeakMap())).toEqual(true)
  expect(isSet(new Set())).toEqual(true)
  expect(isWeakSet(new WeakSet())).toEqual(true)
  // expect(isBlob(blob)).toEqual(true)
  // expect(isFile(new File([''], '', { type: 'text/html' }))).toEqual(true)
  expect(isPromise(new Promise((resolve, reject) => {}))).toEqual(true)
})

test('Basic false tests', () => {
  expect(isError({})).toEqual(false)
  expect(isNumber(NaN)).toEqual(false)
  expect(isDate(new Date('_'))).toEqual(false)
  expect(isDate(NaN)).toEqual(false)
  expect(isUndefined(NaN)).toEqual(false)
  expect(isNull(NaN)).toEqual(false)
  expect(isObject(NaN)).toEqual(false)
  expect(isArray(NaN)).toEqual(false)
  expect(isString(NaN)).toEqual(false)
  expect(isEmptyString(' ')).toEqual(false)
  expect(isFullString('')).toEqual(false)
  expect(isBoolean(NaN)).toEqual(false)
  expect(isRegExp(NaN)).toEqual(false)
  expect(isSymbol(NaN)).toEqual(false)
  expect(isMap(new WeakMap())).toEqual(false)
  expect(isWeakMap(new Map())).toEqual(false)
  expect(isSet(new WeakSet())).toEqual(false)
  expect(isWeakSet(new Set())).toEqual(false)
  expect(isNullOrUndefined(NaN)).toEqual(false)
})

test('isFunction', () => {
  expect(isFunction(NaN)).toEqual(false)
  expect(isFunction(() => {})).toEqual(true)
  expect(isFunction(function () {})).toEqual(true)
  expect(isFunction(async () => {})).toEqual(true)
  expect(isFunction(async function () {})).toEqual(true)
  expect(isFunction(function* () {})).toEqual(true)
  expect(isFunction(async function* () {})).toEqual(true)
  const _ = { fn: () => {}, method() {} }
  expect(isFunction(_.fn)).toEqual(true)
  expect(isFunction(_.method)).toEqual(true)
})

test('isEmptyObject', () => {
  expect(isEmptyObject({})).toEqual(true)
  expect(isEmptyObject(new Object())).toEqual(true)

  expect(isEmptyObject('{}')).toEqual(false)
  expect(isEmptyObject('{}')).toEqual(false)
  expect(isEmptyObject(null)).toEqual(false)
  expect(isEmptyObject(new Date())).toEqual(false)
  expect(isEmptyObject(new Error(''))).toEqual(false)
  expect(isEmptyObject(new Date())).toEqual(false)
  expect(isEmptyObject(Symbol())).toEqual(false)
  expect(isEmptyObject(new Map())).toEqual(false)
  expect(isEmptyObject(new WeakMap())).toEqual(false)
  expect(isEmptyObject(new Set())).toEqual(false)
  expect(isEmptyObject(new WeakSet())).toEqual(false)
})

test('isEmptyArray', () => {
  expect(isEmptyArray([])).toEqual(true)
  expect(isEmptyArray(new Array())).toEqual(true)
  expect(isEmptyArray(new Array(0))).toEqual(true)

  expect(isEmptyArray(new Array(1))).toEqual(false)
  expect(isEmptyArray([undefined])).toEqual(false)
  expect(isEmptyArray(null)).toEqual(false)
  expect(isEmptyArray(new Date())).toEqual(false)
  expect(isEmptyArray(new Error(''))).toEqual(false)
  expect(isEmptyArray(new Date())).toEqual(false)
  expect(isEmptyArray(Symbol())).toEqual(false)
  expect(isEmptyArray(new Map())).toEqual(false)
  expect(isEmptyArray(new WeakMap())).toEqual(false)
  expect(isEmptyArray(new Set())).toEqual(false)
  expect(isEmptyArray(new WeakSet())).toEqual(false)
})

test('isFullArray', () => {
  expect(isFullArray(new Array(1))).toEqual(true)
  expect(isFullArray([undefined])).toEqual(true)
  expect(isFullArray([null])).toEqual(true)
  expect(isFullArray([''])).toEqual(true)

  expect(isFullArray([])).toEqual(false)
  expect(isFullArray(new Array())).toEqual(false)
  expect(isFullArray(new Array(0))).toEqual(false)

  expect(isFullArray(null)).toEqual(false)
  expect(isFullArray(new Date())).toEqual(false)
  expect(isFullArray(new Error(''))).toEqual(false)
  expect(isFullArray(new Date())).toEqual(false)
  expect(isFullArray(Symbol())).toEqual(false)
  expect(isFullArray(new Map())).toEqual(false)
  expect(isFullArray(new WeakMap())).toEqual(false)
  expect(isFullArray(new Set())).toEqual(false)
  expect(isFullArray(new WeakSet())).toEqual(false)
})

test('isPositiveNumber / isNegativeNumber', () => {
  expect(isPositiveNumber(-1)).toEqual(false)
  expect(isPositiveNumber(0)).toEqual(false)
  expect(isPositiveNumber(1)).toEqual(true)
  expect(isNegativeNumber(-1)).toEqual(true)
  expect(isNegativeNumber(0)).toEqual(false)
  expect(isNegativeNumber(1)).toEqual(false)
})

test('NaN tests', () => {
  expect(isNaNValue(NaN)).toEqual(true)
  expect(isNaNValue(new Error(''))).toEqual(false)
  expect(isNaNValue(undefined)).toEqual(false)
  expect(isNaNValue(null)).toEqual(false)
  expect(isNaNValue(undefined)).toEqual(false)
  expect(isNaNValue({})).toEqual(false)
  expect(isNaNValue(new Object())).toEqual(false)
  expect(isNaNValue(() => {})).toEqual(false)
  expect(isNaNValue([])).toEqual(false)
  expect(isNaNValue(new Array())).toEqual(false)
  expect(isNaNValue('')).toEqual(false)
  expect(isNaNValue('_')).toEqual(false)
  expect(isNaNValue('')).toEqual(false)
  expect(isNaNValue(' ')).toEqual(false)
  expect(isNaNValue(true)).toEqual(false)
  expect(isNaNValue(false)).toEqual(false)
  expect(isNaNValue(/./)).toEqual(false)
  expect(isNaNValue(/./gi)).toEqual(false)
  expect(isNaNValue(0)).toEqual(false)
  expect(isNaNValue(1)).toEqual(false)
  expect(isNaNValue(new Date())).toEqual(false)
  expect(isNaNValue(Symbol())).toEqual(false)
  expect(isNaNValue(new Map())).toEqual(false)
  expect(isNaNValue(new WeakMap())).toEqual(false)
  expect(isNaNValue(new Set())).toEqual(false)
  expect(isNaNValue(new WeakSet())).toEqual(false)
  expect(isNaNValue(new Promise((resolve, reject) => {}))).toEqual(false)
})

test('Primitive tests', () => {
  // true
  expect(isPrimitive(0)).toEqual(true)
  expect(isPrimitive('')).toEqual(true)
  expect(isPrimitive('str')).toEqual(true)
  expect(isPrimitive(Symbol())).toEqual(true)
  expect(isPrimitive(true)).toEqual(true)
  expect(isPrimitive(false)).toEqual(true)
  expect(isPrimitive(null)).toEqual(true)
  expect(isPrimitive(undefined)).toEqual(true)
  // false
  expect(isPrimitive(NaN)).toEqual(false)
  expect(isPrimitive([])).toEqual(false)
  expect(isPrimitive(new Array())).toEqual(false)
  expect(isPrimitive({})).toEqual(false)
  expect(isPrimitive(new Object())).toEqual(false)
  expect(isPrimitive(new Date())).toEqual(false)
  expect(isPrimitive(() => {})).toEqual(false)
})

test('Date exception', () => {
  expect(isDate(new Date('_'))).toEqual(false)
})

test('Generic isType', () => {
  // -----------------------------
  // This is correct old fashion syntax for classes, if this is missing
  function MyClass() {}
  MyClass.prototype.constructor = MyClass
  // @ts-ignore
  const myClass = new MyClass()
  // -----------------------------
  class MyOtherClass {
    constructor() {}
  }
  // this is expected behaviour
  expect(isType('', String)).toEqual(true)
  expect(isType('_', String)).toEqual(true)
  expect(isType('Hello World', String)).toEqual(true)
  expect(isType(NaN, Number)).toEqual(true)
  expect(isType(0, Number)).toEqual(true)
  expect(isType(1, Number)).toEqual(true)
  expect(isType({}, Object)).toEqual(true)
  expect(isType(new Object(), Object)).toEqual(true)
  expect(isType([], Array)).toEqual(true)
  expect(isType(new Array(), Array)).toEqual(true)
  expect(isType(() => {}, Function)).toEqual(true)
  expect(isType(true, Boolean)).toEqual(true)
  expect(isType(false, Boolean)).toEqual(true)
  expect(isType(new Date('_'), Date)).toEqual(true)
  expect(isType(new Date(), Date)).toEqual(true)
  expect(isType(/./, RegExp)).toEqual(true)
  expect(isType(/./gi, RegExp)).toEqual(true)
  expect(isType(myClass, MyClass)).toEqual(true)
  expect(isType(new MyOtherClass(), MyOtherClass)).toEqual(true)
  expect(isType(myClass, MyOtherClass)).toEqual(false)
  expect(isType(Symbol(), Symbol)).toEqual(true)
  // expect(isType(null, Null)).toEqual(true)
  // expect(isType(undefined, Undefined)).toEqual(true)
  // It SHOULD fail
  expect(isType(5, String)).toEqual(false)
  expect(isType(null, Object)).toEqual(false)
  // Not sure if this would be the expected behaviour but everything is an object
  // so I would say so
  expect(isType(myClass, Object)).toEqual(true)
})

test('isObject vs isAnyObject', () => {
  // -----------------------------
  // This is correct old fashion syntax for classes, if this is missing
  function MyClass() {}
  MyClass.prototype.constructor = MyClass
  // @ts-ignore
  const myClass = new MyClass()
  // -----------------------------
  class MyClass2 {
    constructor() {}
  }
  const myClass2 = new MyClass2()
  const mySpecialObject = {}
  Object.setPrototypeOf(mySpecialObject, {
    toDate: function () {
      return new Date()
    },
  })
  // IS OBJECT
  // plain object
  expect(isObject({})).toEqual(true)
  expect(isObject(new Object())).toEqual(true)
  expect(isObject({ constructor: '123' })).toEqual(true)
  expect(isPlainObject({})).toEqual(true)
  expect(isPlainObject(new Object())).toEqual(true)
  expect(isPlainObject({ constructor: '123' })).toEqual(true)
  // classes & prototypes
  expect(isObject(myClass)).toEqual(false)
  expect(isObject(myClass2)).toEqual(false)
  expect(isObject(mySpecialObject)).toEqual(false)
  expect(isPlainObject(myClass)).toEqual(false)
  expect(isPlainObject(myClass2)).toEqual(false)
  expect(isPlainObject(mySpecialObject)).toEqual(false)
  // arrays and dates
  expect(isObject([])).toEqual(false)
  expect(isObject(new Array())).toEqual(false)
  expect(isObject(new Date('_'))).toEqual(false)
  expect(isObject(new Date())).toEqual(false)
  expect(isPlainObject([])).toEqual(false)
  expect(isPlainObject(new Array())).toEqual(false)
  expect(isPlainObject(new Date('_'))).toEqual(false)
  expect(isPlainObject(new Date())).toEqual(false)
  // IS ANY OBJECT
  // plain object
  expect(isAnyObject({})).toEqual(true)
  expect(isAnyObject(new Object())).toEqual(true)
  // classes & prototypes
  expect(isAnyObject(myClass)).toEqual(true)
  expect(isAnyObject(myClass2)).toEqual(true)
  expect(isAnyObject(mySpecialObject)).toEqual(true)
  // arrays and dates
  expect(isAnyObject([])).toEqual(false)
  expect(isAnyObject(new Array())).toEqual(false)
  expect(isAnyObject(new Date('_'))).toEqual(false)
  expect(isAnyObject(new Date())).toEqual(false)
})

test('isOneOf', () => {
  expect(isOneOf(isString, isNumber)('_')).toEqual(true)
  expect(isOneOf(isString, isNumber)(1)).toEqual(true)
  expect(isOneOf(isString, isNumber)(undefined)).toEqual(false)

  expect(isOneOf(isString, isNumber, isBoolean)('_')).toEqual(true)
  expect(isOneOf(isString, isNumber, isBoolean)(1)).toEqual(true)
  expect(isOneOf(isString, isNumber, isBoolean)(true)).toEqual(true)
  expect(isOneOf(isString, isNumber, isBoolean)(undefined)).toEqual(false)

  expect(isOneOf(isString, isNumber, isBoolean, isArray)('_')).toEqual(true)
  expect(isOneOf(isString, isNumber, isBoolean, isArray)(1)).toEqual(true)
  expect(isOneOf(isString, isNumber, isBoolean, isArray)(true)).toEqual(true)
  expect(isOneOf(isString, isNumber, isBoolean, isArray)([])).toEqual(true)
  expect(isOneOf(isString, isNumber, isBoolean, isArray)(undefined)).toEqual(false)

  expect(isOneOf(isString, isNumber, isBoolean, isArray, isPlainObject)('_')).toEqual(true)
  expect(isOneOf(isString, isNumber, isBoolean, isArray, isPlainObject)(1)).toEqual(true)
  expect(isOneOf(isString, isNumber, isBoolean, isArray, isPlainObject)(true)).toEqual(true)
  expect(isOneOf(isString, isNumber, isBoolean, isArray, isPlainObject)([])).toEqual(true)
  expect(isOneOf(isString, isNumber, isBoolean, isArray, isPlainObject)({})).toEqual(true)
  expect(isOneOf(isString, isNumber, isBoolean, isArray, isPlainObject)(undefined)).toEqual(false)
})

test('type related tests', () => {
  // const fn: string | ((k: number) => string) = (p) => 'a'
  // if (!isFunction(fn)) {
  //   fn
  // }
  // const a: Record<string, number> = {}
  // a[fn(1)] = fn(2)
  // const myArray: string | string[] = ['a', 'b']
  // if (!isArray(myArray)) {
  //   myArray
  // }
  // const a: Record<string, number> = {}
  // a[myArray[1]] = myArray[0]
  // const myArray: string | any[] = [1, 2, 'a', 'b']
  // if (!isArray(myArray)) {
  //   myArray
  // }
  // const a: Record<string, number> = {}
  // a[myArray[1]] = myArray[0]
})

test('isInstanceOf', () => {
  expect(isInstanceOf(new Date(), Date)).toEqual(true)
  expect(isInstanceOf(new Date(), 'Date')).toEqual(true)
  expect(isInstanceOf(new Date(), Object)).toEqual(true)
  expect(isInstanceOf(new Date(), 'Object')).toEqual(true)

  expect(isInstanceOf(new String(), String)).toEqual(true)
  expect(isInstanceOf(new String(), 'String')).toEqual(true)
  expect(isInstanceOf(new String(), Object)).toEqual(true)
  expect(isInstanceOf(new String(), 'Object')).toEqual(true)

  expect(isInstanceOf(new Number(), Number)).toEqual(true)
  expect(isInstanceOf(new Number(), 'Number')).toEqual(true)
  expect(isInstanceOf(new Number(), Object)).toEqual(true)
  expect(isInstanceOf(new Number(), 'Object')).toEqual(true)

  expect(isInstanceOf(new Boolean(), Boolean)).toEqual(true)
  expect(isInstanceOf(new Boolean(), 'Boolean')).toEqual(true)
  expect(isInstanceOf(new Boolean(), Object)).toEqual(true)
  expect(isInstanceOf(new Boolean(), 'Object')).toEqual(true)

  expect(isInstanceOf([], Array)).toEqual(true)
  expect(isInstanceOf([], 'Array')).toEqual(true)
  expect(isInstanceOf([], Object)).toEqual(true)
  expect(isInstanceOf([], 'Object')).toEqual(true)

  expect(isInstanceOf({}, Object)).toEqual(true)
  expect(isInstanceOf({}, 'Object')).toEqual(true)
})
