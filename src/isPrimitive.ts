export default function isPrimitive(
  x: unknown
): x is null | undefined | bigint | boolean | number | string | symbol {
  return (
    x == null ||
    typeof x === "bigint" ||
    typeof x === "boolean" ||
    (typeof x === "number" && !Number.isNaN(x)) ||
    typeof x === "string" ||
    typeof x === "symbol"
  );
}
