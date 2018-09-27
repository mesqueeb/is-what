import test from 'ava'
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
  isDate
} from '../dist/index.cjs'

test('true', t => {
  t.is(isUndefined(undefined), true)
  t.is(isNull(null), true)
  t.is(isObject({}), true)
  t.is(isObject(new Object()), true)
  t.is(isFunction(_ => {}), true)
  t.is(isArray([]), true)
  t.is(isArray(new Array()), true)
  t.is(isString(''), true)
  t.is(isString('_'), true)
  t.is(isBoolean(true), true)
  t.is(isBoolean(false), true)
  t.is(isRegExp(/./), true)
  t.is(isRegExp(/./gi), true)
  t.is(isNumber(0), true)
  t.is(isNumber(1), true)
  t.is(isDate(new Date()), true)
})

test('false', t => {
  t.is(isDate(new Date('_')), false)
  t.is(isDate(NaN), false)
  t.is(isNumber(NaN), false)
  t.is(isUndefined(NaN), false)
  t.is(isNull(NaN), false)
  t.is(isObject(NaN), false)
  t.is(isFunction(NaN), false)
  t.is(isArray(NaN), false)
  t.is(isString(NaN), false)
  t.is(isBoolean(NaN), false)
  t.is(isRegExp(NaN), false)
})
