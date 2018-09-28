
function getType (payload: any): string {
  return Object.prototype.toString.call(payload).slice(8, -1)
}
function isUndefined (payload: any): payload is undefined {
  return getType(payload) === 'Undefined'
}
function isNull (payload: any): payload is null {
  return getType(payload) === 'Null'
}
function isObject (payload: any): payload is object {
  return getType(payload) === 'Object'
}
function isFunction (payload: any): payload is Function {
  return getType(payload) === 'Function'
}
function isArray (payload: any): payload is any[] {
  return getType(payload) === 'Array'
}
function isString (payload: any): payload is string {
  return getType(payload) === 'String'
}
function isNumber (payload: any): payload is number {
  return (getType(payload) === 'Number' && !isNaN(payload))
}
function isBoolean (payload: any): payload is boolean {
  return getType(payload) === 'Boolean'
}
function isRegExp (payload: any): payload is RegExp {
  return getType(payload) === 'RegExp'
}
function isDate (payload: any): payload is Date {
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
