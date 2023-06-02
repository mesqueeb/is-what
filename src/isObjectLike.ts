import isAnyObject from './isAnyObject.js'

export default function isObjectLike(x: unknown): x is object {
  return isAnyObject(x) || typeof x === 'function'
}
