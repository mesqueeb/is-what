import {
  isUndefined,
  isNull,
  isObject,
  isFunction,
  isArray,
  isString,
  isBoolean,
  isRegExp,
  isNumber,
  isDate,
  isType,
  getType
} from '../dist/index.cjs'

test('All tests should return true', () => {
  expect(isUndefined(undefined)).toBe(true)
  expect(isNull(null)).toBe(true)
  expect(isObject({})).toBe(true)
  expect(isObject(new Object())).toBe(true)
  expect(isFunction(_ => {})).toBe(true)
  expect(isArray([])).toBe(true)
  expect(isArray(new Array())).toBe(true)
  expect(isString('')).toBe(true)
  expect(isString('_')).toBe(true)
  expect(isBoolean(true)).toBe(true)
  expect(isBoolean(false)).toBe(true)
  expect(isRegExp(/./)).toBe(true)
  expect(isRegExp(/./gi)).toBe(true)
  expect(isNumber(0)).toBe(true)
  expect(isNumber(1)).toBe(true)
  expect(isDate(new Date())).toBe(true)
})

test('All tests should return false', () => {
  expect(isDate(new Date('_'))).toBe(false)
  expect(isDate(NaN)).toBe(false)
  expect(isNumber(NaN)).toBe(false)
  expect(isUndefined(NaN)).toBe(false)
  expect(isNull(NaN)).toBe(false)
  expect(isObject(NaN)).toBe(false)
  expect(isFunction(NaN)).toBe(false)
  expect(isArray(NaN)).toBe(false)
  expect(isString(NaN)).toBe(false)
  expect(isBoolean(NaN)).toBe(false)
  expect(isRegExp(NaN)).toBe(false)
})

test('Generic isType', () => {
  expect(isType('Hello World', String)).toBe(true)
  expect(isType(5, String)).toBe(false)
  expect(isType(5, Number)).toBe(true)
  expect(isType(NaN, Number)).toBe(true)
  expect(isType(null, Object)).toBe(false)
  // this is expected behaviour
  expect(isType(new Date('_'), Date)).toBe(true)

  function MyClass () {}
  // This is correct old fashion syntax for classes, if this is missing
  // It SHOULD fail
  MyClass.prototype.constructor = MyClass
  class MyOtherClass {}

  const myClass = new MyClass()
  expect(isType(myClass, MyClass)).toBe(true)
  expect(isType(new MyOtherClass(), MyOtherClass)).toBe(true)
  expect(isType(myClass, MyOtherClass)).toBe(false)

  // Not sure if this owuld be the expected behaviour but everything is an object

  expect(isType(myClass, Object)).toBe(true)

})
