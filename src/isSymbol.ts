export default function isSymbol(x: unknown): x is symbol {
  return typeof x === "symbol";
}
