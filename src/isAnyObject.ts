/**
 * Checks if the given value is _any_ kind of object. This includes `Object`,
 * `Object.create(null)`, `new File()`, `new Map()`, `() => {}`, etc. Anything
 * that's not a primitive or a special value (`null` or `undefined`) will return
 * `true`.
 *
 * This is equivalent to `if (!!x && (typeof x === 'object' || typeof x ===
 * 'function')) { ... }`, but shorter (it's a function call).
 *
 * @example
 *   console.log(isAnyObject({}));
 *   //=> true
 *   console.log(isAnyObject(Object.create(null)));
 *   //=> true
 *   console.log(isAnyObject(new Map()));
 *   //=> true
 *   console.log(isAnyObject([]));
 *   //=> true
 *   console.log(isAnyObject(() => {}));
 *   //=> true
 *   console.log(isAnyObject("hi"));
 *   //=> false
 *   console.log(isAnyObject(1));
 *   //=> false
 *   console.log(isAnyObject(null));
 *   //=> false
 *   console.log(isAnyObject(undefined));
 *   //=> false
 */
export default function isAnyObject(x: unknown): x is object {
  return (
    !!x &&
    ((typeof x === "object" &&
      !Array.isArray(x) &&
      (() => {
        let y: number;
        try {
          y = Date.prototype.valueOf.call(x as Date);
        } catch {
          return true;
        }
        return !Number.isNaN(y);
      })()) ||
      typeof x === "function")
  );
}
