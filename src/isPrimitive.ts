export default function isPrimitive(
  x: unknown
): x is string | number | boolean | symbol | null | undefined {
  return (
    x == null ||
    typeof x === 'string' ||
    typeof x === 'number' ||
    typeof x === 'boolean' ||
    typeof x === 'symbol'
  )
}
