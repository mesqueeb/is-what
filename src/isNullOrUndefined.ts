export default function isNullOrUndefined(x: unknown): x is null | undefined {
  return x == null
}
