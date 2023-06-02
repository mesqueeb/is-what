export default function isFullArray<T extends unknown[] = unknown[]>(x: T): x is T {
  return Array.isArray(x) && x.length > 0
}
