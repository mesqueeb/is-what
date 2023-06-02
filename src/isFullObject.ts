import isPlainObject from './isPlainObject.js'

export default function isFullObject(x: unknown): x is {} {
  return isPlainObject(x) && !!Reflect.ownKeys(x).length
}
