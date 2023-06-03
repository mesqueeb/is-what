import isPlainObject from "./isPlainObject.js";

export default function isFullObject<
  T extends object = Record<keyof any, unknown>
>(x: unknown): x is T {
  return isPlainObject(x) && !!Reflect.ownKeys(x).length;
}
