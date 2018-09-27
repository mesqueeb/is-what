
function getType (payload: any): string {
  return Object.prototype.toString.call(payload).slice(8, -1)
}
function isUndefined (payload: any): boolean {
  return getType(payload) === 'Undefined'
}
function isNull (payload: any): boolean {
  return getType(payload) === 'Null'
}
function isObject (payload: any): boolean {
  return getType(payload) === 'Object'
}
function isFunction (payload: any): boolean {
  return getType(payload) === 'Function'
}
function isArray (payload: any): boolean {
  return getType(payload) === 'Array'
}
function isString (payload: any): boolean {
  return getType(payload) === 'String'
}
function isNumber (payload: any): boolean {
  return (getType(payload) === 'Number' && !isNaN(payload))
}
function isBoolean (payload: any): boolean {
  return getType(payload) === 'Boolean'
}
function isRegExp (payload: any): boolean {
  return getType(payload) === 'RegExp'
}
function isDate (payload: any): boolean {
  return (getType(payload) === 'Date' && !isNaN(payload))
}

export {
  getType,
  isUndefined,
  isNull,
  isObject,
  isFunction,
  isArray,
  isString,
  isNumber,
  isBoolean,
  isRegExp,
  isDate
}
