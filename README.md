# isWhat
Very simple &amp; small JS type check function

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
  return getType(payload) === 'Number'
}
function isBoolean (payload) {
  return getType(payload) === 'Boolean'
}
function isRegExp (payload) {
  return getType(payload) === 'RegExp'
}
function isDate (payload) {
  return getType(payload) === 'Date'
}
```

## Build from source

```bash
npm run build
```
