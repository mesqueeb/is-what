export default function isNegativeNumber(x: unknown): x is number {
  return typeof x === 'number' && x < 0
}
