export default function isFullString(x: unknown): x is string {
  return typeof x === 'string' && x.length > 0
}
