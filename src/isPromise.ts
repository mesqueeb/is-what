export default function isPromise<T extends Promise<unknown> = Promise<unknown>>(
  x: unknown
): x is T {
  return Object.prototype.toString.call(x).slice(8, -1) === 'Promise'
}
