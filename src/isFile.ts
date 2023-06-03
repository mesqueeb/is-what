export default function isFile(x: unknown): x is File {
  try {
    Object.getOwnPropertyDescriptor(File.prototype, 'name')!.get!.call(x as File)
  } catch {
    // Assume that it was a TypeError. If it was something else... 🤷‍♂️
    return false
  }
  return true
}
