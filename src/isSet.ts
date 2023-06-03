export default function isSet<T>(x: unknown): x is Set<T> {
  try {
    Object.getOwnPropertyDescriptor(Set.prototype, "size")!.get!.call(
      x as Set<T>
    );
  } catch {
    return false;
  }
  return true;
}
