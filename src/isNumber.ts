export default function isNumber(x: unknown): x is number {
  return typeof x === 'number'
}
