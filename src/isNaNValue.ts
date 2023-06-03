export default function isNaNValue(x: unknown): x is number {
  return Number.isNaN(x);
}
