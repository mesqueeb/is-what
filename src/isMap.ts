export default function isMap<K, V>(x: unknown): x is Map<K, V> {
  try {
    Object.getOwnPropertyDescriptor(Map.prototype, "size")?.get?.call(
      x as Map<K, V>
    );
  } catch {
    return false;
  }
  return true;
}
