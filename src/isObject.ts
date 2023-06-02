import isPlainObject from './isPlainObject.js'

/**
 * This is just an alias for isAnyObject(). This may change in the future to include
 * Object.create(null).
 */
export default function isObject(x: unknown): x is object {
  return isPlainObject(x)
}
