export default function isFullArray<T extends unknown[] = unknown[]>(x: unknown): x is T {
  return Array.isArray(x) && x.length > 0
}
