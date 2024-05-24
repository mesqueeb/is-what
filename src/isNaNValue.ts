import { getType } from './getType.js'

/** Returns whether the payload is literally the value `NaN` (it's `NaN` and also a `number`) */
export function isNaNValue(payload: unknown): payload is typeof NaN {
  return getType(payload) === 'Number' && isNaN(payload as unknown as number)
}
