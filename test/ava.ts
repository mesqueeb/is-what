import test from 'ava'
import {
  isError,
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
  isDate,
  isSymbol,
  isPrimitive,
  isType,
  // isBlob,
  // isFile,
  isPromise,
} from '../src/index'

// const blob = Buffer.from([])

test('Basic true tests', t => {
  t.is(isError(new Error('')), true)
  t.is(isUndefined(undefined), true)
  t.is(isNull(null), true)
  t.is(isNullOrUndefined(null), true)
  t.is(isNullOrUndefined(undefined), true)
  t.is(isObject({}), true)
  t.is(isObject(new Object()), true)
  t.is(
    isFunction(_ => {}),
    true
  )
  t.is(isArray([]), true)
  t.is(isArray(new Array()), true)
  t.is(isString(''), true)
  t.is(isString('_'), true)
  t.is(isEmptyString(''), true)
  t.is(isFullString(' '), true)
  t.is(isBoolean(true), true)
  t.is(isBoolean(false), true)
  t.is(isRegExp(/./), true)
  t.is(isRegExp(/./gi), true)
  t.is(isNumber(0), true)
  t.is(isNumber(1), true)
  t.is(isDate(new Date()), true)
  t.is(isSymbol(Symbol()), true)
  // t.is(isBlob(blob), true)
  // t.is(isFile(new File([''], '', { type: 'text/html' })), true)
  t.is(isPromise(new Promise((resolve, reject) => {})), true)
})

test('Basic false tests', t => {
  t.is(isError({}), false)
  t.is(isNumber(NaN), false)
  t.is(isDate(new Date('_')), false)
  t.is(isDate(NaN), false)
  t.is(isUndefined(NaN), false)
  t.is(isNull(NaN), false)
  t.is(isObject(NaN), false)
  t.is(isFunction(NaN), false)
  t.is(isArray(NaN), false)
  t.is(isString(NaN), false)
  t.is(isEmptyString(' '), false)
  t.is(isFullString(''), false)
  t.is(isBoolean(NaN), false)
  t.is(isRegExp(NaN), false)
  t.is(isSymbol(NaN), false)
  t.is(isNullOrUndefined(NaN), false)
})

test('Primitive tests', t => {
  // true
  t.is(isPrimitive(0), true)
  t.is(isPrimitive(''), true)
  t.is(isPrimitive('str'), true)
  t.is(isPrimitive(Symbol()), true)
  t.is(isPrimitive(true), true)
  t.is(isPrimitive(false), true)
  t.is(isPrimitive(null), true)
  t.is(isPrimitive(undefined), true)
  // false
  t.is(isPrimitive(NaN), false)
  t.is(isPrimitive([]), false)
  t.is(isPrimitive(new Array()), false)
  t.is(isPrimitive({}), false)
  t.is(isPrimitive(new Object()), false)
  t.is(isPrimitive(new Date()), false)
  t.is(
    isPrimitive(_ => {}),
    false
  )
})

test('Date exception', t => {
  t.is(isDate(new Date('_')), false)
})

test('Generic isType', t => {
  function MyClass () {}
  // This is correct old fashion syntax for classes, if this is missing
  MyClass.prototype.constructor = MyClass
  class MyOtherClass {}
  const myClass = new MyClass()
  // this is expected behaviour
  t.is(isType('', String), true)
  t.is(isType('_', String), true)
  t.is(isType('Hello World', String), true)
  t.is(isType(NaN, Number), true)
  t.is(isType(0, Number), true)
  t.is(isType(1, Number), true)
  t.is(isType({}, Object), true)
  t.is(isType(new Object(), Object), true)
  t.is(isType([], Array), true)
  t.is(isType(new Array(), Array), true)
  t.is(
    isType(_ => {}, Function),
    true
  )
  t.is(isType(true, Boolean), true)
  t.is(isType(false, Boolean), true)
  t.is(isType(new Date('_'), Date), true)
  t.is(isType(new Date(), Date), true)
  t.is(isType(/./, RegExp), true)
  t.is(isType(/./gi, RegExp), true)
  t.is(isType(myClass, MyClass), true)
  t.is(isType(new MyOtherClass(), MyOtherClass), true)
  t.is(isType(myClass, MyOtherClass), false)
  t.is(isType(Symbol(), Symbol), true)
  // t.is(isType(null, Null), true)
  // t.is(isType(undefined, Undefined), true)
  // It SHOULD fail
  t.is(isType(5, String), false)
  t.is(isType(null, Object), false)
  // Not sure if this would be the expected behaviour but everything is an object
  // so I would say so
  t.is(isType(myClass, Object), true)
})

test('isObject vs isAnyObject', t => {
  function MyClass () {}
  // This is correct old fashion syntax for classes, if this is missing
  MyClass.prototype.constructor = MyClass
  const myClass = new MyClass()
  class MyClass2 {}
  const myClass2 = new MyClass()
  const mySpecialObject = {}
  Object.setPrototypeOf(mySpecialObject, {
    toDate: function () {
      return new Date()
    },
  })
  // IS OBJECT
  // plain object
  t.is(isObject({}), true)
  t.is(isObject(new Object()), true)
  t.is(isPlainObject({}), true)
  t.is(isPlainObject(new Object()), true)
  // classes & prototypes
  t.is(isObject(myClass), false)
  t.is(isObject(myClass2), false)
  t.is(isObject(mySpecialObject), false)
  t.is(isPlainObject(myClass), false)
  t.is(isPlainObject(myClass2), false)
  t.is(isPlainObject(mySpecialObject), false)
  // arrays and dates
  t.is(isObject([]), false)
  t.is(isObject(new Array()), false)
  t.is(isObject(new Date('_')), false)
  t.is(isObject(new Date()), false)
  t.is(isPlainObject([]), false)
  t.is(isPlainObject(new Array()), false)
  t.is(isPlainObject(new Date('_')), false)
  t.is(isPlainObject(new Date()), false)
  // IS ANY OBJECT
  // plain object
  t.is(isAnyObject({}), true)
  t.is(isAnyObject(new Object()), true)
  // classes & prototypes
  t.is(isAnyObject(myClass), true)
  t.is(isAnyObject(myClass2), true)
  t.is(isAnyObject(mySpecialObject), true)
  // arrays and dates
  t.is(isAnyObject([]), false)
  t.is(isAnyObject(new Array()), false)
  t.is(isAnyObject(new Date('_')), false)
  t.is(isAnyObject(new Date()), false)
})
