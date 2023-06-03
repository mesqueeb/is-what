export default function isRegExp(x: unknown): x is RegExp {
  try {
    Object.getOwnPropertyDescriptor(RegExp.prototype, "source")!.get!.call(
      x as RegExp
    );
  } catch {
    return false;
  }
  return true;
}
