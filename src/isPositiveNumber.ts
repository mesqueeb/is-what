export default function isPositiveNumber(x: unknown): x is number {
  return typeof x === "number" && x > 0;
}
