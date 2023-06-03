export default function isError(x: unknown): x is Error {
  return (
    !!x &&
    typeof x === 'object' &&
    Object.getPrototypeOf(Object.getPrototypeOf(x)) !== null &&
    'name' in x &&
    'message' in x
  )
}
