export default function isEmptyArray(x: unknown): x is [] {
  return Array.isArray(x) && x.length === 0;
}
