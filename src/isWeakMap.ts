export default function isWeakMap<K extends object, V>(
  x: unknown
): x is WeakMap<K, V> {
  try {
    WeakMap.prototype.has.call(x as WeakMap<K, V>, undefined!);
  } catch {
    return false;
  }
  return true;
}
