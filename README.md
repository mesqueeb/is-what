# is What?

```
npm i is-what
```

Very simple &amp; small JS type check function

**Motivation:** I built is-what because the existing solutions were all too complex.

It's litterally just these functions:

```js
function getType (payload) {
  return Object.prototype.toString.call(payload).slice(8, -1)
}
function isUndefined (payload) {
  return getType(payload) === 'Undefined'
}
function isNull (payload) {
  return getType(payload) === 'Null'
}
function isObject (payload) {
  return getType(payload) === 'Object'
}
function isFunction (payload) {
  return getType(payload) === 'Function'
}
function isArray (payload) {
  return getType(payload) === 'Array'
}
function isString (payload) {
  return getType(payload) === 'String'
}
function isNumber (payload) {
  return (getType(payload) === 'Number' && !isNaN(payload))
}
function isBoolean (payload) {
  return getType(payload) === 'Boolean'
}
function isRegExp (payload) {
  return getType(payload) === 'RegExp'
}
function isDate (payload) {
  return (getType(payload) === 'Date' &&  !isNaN(payload))
}
```

Since v2.0.0, checking for `isNumber` and `isDate` will return `false` if the payload is `NaN` or an invalid date.

## Tests

```
npm run test
```
