/** Returns whether the payload is '' */
export function isEmptyString(payload: unknown): payload is string {
  return payload === ''
}
