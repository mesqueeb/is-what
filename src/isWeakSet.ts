export default function isWeakSet<T extends object>(
  x: unknown
): x is WeakSet<T> {
  try {
    WeakSet.prototype.has.call(x as WeakSet<T>, undefined!);
  } catch {
    return false;
  }
  return true;
}
