import {getType} from './getType.js'

type MongoId = string;

/** Returns whether the payload is a mongoId */
export function isMongoId(payload: string): payload is MongoId {
  const isString = getType(payload) === 'String'

  if (!isString || payload.length !== 24) {
    return false
  }

  const hexRegExp = /^[0-9a-fA-F]+$/;

  return hexRegExp.test(payload);
}
