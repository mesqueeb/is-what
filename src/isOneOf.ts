type TypeGuard<A, B extends A> = (x: A) => x is B

function isOneOf<A, B extends A>(a: TypeGuard<A, B>): TypeGuard<A, B>
function isOneOf<A, B extends A, C extends A>(
  a: TypeGuard<A, B>,
  b: TypeGuard<A, C>
): TypeGuard<A, B | C>
function isOneOf<A, B extends A, C extends A, D extends A>(
  a: TypeGuard<A, B>,
  b: TypeGuard<A, C>,
  c: TypeGuard<A, D>
): TypeGuard<A, B | C | D>
function isOneOf<A, B extends A, C extends A, D extends A, E extends A>(
  a: TypeGuard<A, B>,
  b: TypeGuard<A, C>,
  c: TypeGuard<A, D>,
  d: TypeGuard<A, E>
): TypeGuard<A, B | C | D | E>
function isOneOf<A, B extends A, C extends A, D extends A, E extends A, F extends A>(
  a: TypeGuard<A, B>,
  b: TypeGuard<A, C>,
  c: TypeGuard<A, D>,
  d: TypeGuard<A, E>,
  e: TypeGuard<A, F>
): TypeGuard<A, B | C | D | E | F>
function isOneOf(...checks: ((x: unknown) => boolean)[]): (x: unknown) => boolean {
  return (x: unknown): boolean => checks.some((check) => check(x))
}

export default isOneOf
export type { TypeGuard }
