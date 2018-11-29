# is What? 🙉

```
npm i is-what
```

Very simple &amp; small JS type check functions. It's fully TypeScript supported!

**Motivation:** I built is-what because the existing solutions were all too complex.

### Functions

isPlainObject, isAnyObject, isString, isNumber, isBoolean, isFunction, isArray, isUndefined, isNull, isRegExp, isDate, isSymbol, isPrimitive, isType, getType

### Usage

is-what is really easy to use, and all functions above work just like you'd expect.

```js
import { isString, isType, getType } from 'is-what'

isString('') // returns true
isType('', String) // returns true
getType('') // returns 'String'
```

#### isPlainObject vs isAnyObject

Checking for a JavaScript object can be really difficult. In JavaScript you can create classes that will behave just like JavaScript objects but might have completely different prototypes. With is-what I went for this classification:
- `isPlainObject` will only return `true` on plain JavaScript objects and not on classes or others
- `isAnyObject` will be more loose and return `true` on regular objects, classes, etc.

```js
const plainObject = {hello: 'I am a good old object.'}
class SpecialObject {
  constructor (somethingSpecial) {
    this.speciality = somethingSpecial
  }
}
const specialObject = new SpecialObject('I am a special object! I am a class!!!')

// let's check:
import { isPlainObject, isAnyObject, getType } from 'is-what'
// plainObject
isPlainObject(plainObject) // returns true
isAnyObject(plainObject) // returns true
getType(plainObject) // returns 'Object'
// specialObject
isPlainObject(specialObject) // returns false !!!!!!!!!
isAnyObject(specialObject) // returns true
getType(specialObject) // returns 'Object'
```

> Please note that `isPlainObject` will only return `true` for normal plain JavaScript object.

#### Useful number & date exception:

Checking for `isNumber` and `isDate` will return `false` if the payload is `NaN` or an invalid date. This is done intentionally and especially useful when you need to check if numbers or dates are correct in your functions!

```js
isNumber(NaN) // returns false
isDate(new Date('---- invalid date ----')) // returns false
```

### TypeScript usage example:

is-what makes TypeScript know the type during if statements. This means that a check returns the type of the payload for TypeScript users.

```TypeScript
function isNumber (payload: any): payload is number {
  // return boolean
}
// As you can see above, all functions return a boolean for JavaScript, but pass the payload type to TypeScript.

// usage example:
function fn (payload: string | number): number {
  if (isNumber(payload)) {
    // ↑ TypeScript already knows payload is a number here!
    return payload
  }
}
```

`isPlainObject` and `isAnyObject` with TypeScript will declare the payload to be an object type with any props:

```TypeScript
function isPlainObject (payload: any): payload is {[key: string]: any}
function isAnyObject (payload: any): payload is {[key: string]: any}
// The reason to return `{[key: string]: any}` is to be able to do
if (isPlainObject(payload) && payload.id) return payload.id
// if isPlainObject() would return `payload is object` then it would give an error at `payload.id`
```

If you want more control over which kind of objects are allowed you can use `isObjectLike<T>`:

```TypeScript
function isObjectLike<T extends object> (payload: any): payload is T {
  return isAnyObject(payload)
}
// usage examples:
isObjectLike<{specificKey: string}>(payload)
isObjectLike<object>(payload)
// you can just pass a specific type for TS to check on.
```

### Source code

It's litterally just these functions:

```js
function getType (payload) {
  return Object.prototype.toString.call(payload).slice(8, -1)
}
function isUndefined (payload) {
  return getType(payload) === 'Undefined'
}
function isString (payload) {
  return getType(payload) === 'String'
}
function isAnyObject (payload) {
  return getType(payload) === 'Object'
}
// etc...
```

See the full source code [here](https://github.com/mesqueeb/is-what/blob/master/src/index.ts).

## Tests

```
npm run test
```
