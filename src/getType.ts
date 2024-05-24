/** Returns the object type of the given payload */
export function getType(payload: unknown): string {
  return Object.prototype.toString.call(payload).slice(8, -1)
}
