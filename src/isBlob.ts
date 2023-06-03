/**
 * Returns `true` _if and only if_ this is a **native** `Blob` object. This is a stricter check than
 * if (isType(x, 'Blob')) because `isType(x, "Blob")` will return `false` for
 * `Object.create(Blob.prototype)`.
 *
 * This check abuses the fact that WebIDL methods and getters of native objects throw a `TypeError`
 * when they are invoked with a non-`ThatThing` object. We use the `.size` getter to check if the
 * object is a `Blob` or not. If it throws, then it is not a `Blob`. If it doesn't throw, then it is
 * a `Blob`! 🎉
 *
 * @example
 *   console.log(isBlob(new Blob(['hello world'])))
 *   //=> true
 *   console.log(isBlob({ size: 1 }))
 *   //=> false
 *   console.log(isBlob(Object.create(Blob.prototype)))
 *   //=> false
 */
export default function isBlob(x: unknown): x is Blob {
  try {
    Object.getOwnPropertyDescriptor(Blob.prototype, "size")!.get!.call(
      x as Blob
    );
  } catch {
    // Assume that it was a TypeError. If it was something else... 🤷‍♂️
    return false;
  }
  return true;
}
