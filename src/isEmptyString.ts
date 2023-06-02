export default function isEmptyString(x: unknown): x is '' {
  return typeof x === 'string' && x.length === 0
}
