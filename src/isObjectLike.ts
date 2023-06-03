export default function isObjectLike(x: unknown): x is object {
  return !!x && (typeof x === 'object' || typeof x === 'function')
}
