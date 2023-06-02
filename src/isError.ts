export default function isError(x: unknown): x is Error {
  try {
    Error.prototype.toString.call(x as Error)
  } catch {
    // Assume that it was a TypeError. If it was something else... 🤷‍♂️
    return false
  }
  return true
}
