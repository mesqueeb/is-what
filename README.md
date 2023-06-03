# Is what?

👩‍🔬 `isPlainObject()` and other tiny typechecking testers

[![](https://img.shields.io/npm/dw/is-what.svg)](https://www.npmjs.com/package/is-what)

<div align="center">

![](https://i.imgur.com/mRM7956.png)

[Docs website](https://mesqueeb.github.io/is-what/) |
[deno.land/x/is_what](https://deno.land/x/is_what) |
[My other packages](https://github.com/search?q=user%3Amesqueeb+language%3ATypeScript&type=repositories)

</div>

🦐 Very small \
🌳 Tree-shakeable \
✅ Fully TypeScript! \
🌐 Works in any environment \
📦 **No dependencies**

## Installation

![npm](https://img.shields.io/static/v1?style=for-the-badge&message=npm&color=CB3837&logo=npm&logoColor=FFFFFF&label=)
![Yarn](https://img.shields.io/static/v1?style=for-the-badge&message=Yarn&color=2C8EBB&logo=Yarn&logoColor=FFFFFF&label=)
![pnpm](https://img.shields.io/static/v1?style=for-the-badge&message=pnpm&color=222222&logo=pnpm&logoColor=F69220&label=)
![jsDelivr](https://img.shields.io/static/v1?style=for-the-badge&message=jsDelivr&color=E84D3D&logo=jsDelivr&logoColor=FFFFFF&label=)

You can install this package locally using npm, [Yarn], or [pnpm].

```sh
npm install is-what
```

If you're using Deno, you can import this package either from [deno.land/x] or
[ESM>CDN]. You can also import it directly from npm using [Deno's new `npm:`
prefix].

```ts
import {} from "https://deno.land/x/is_what/mod.ts";
import {} from "https://esm.sh/is-what";
import {} from "npm:is-what";
```

If you're importing this package directly from a browser environment, you can
use an npm CDN like [ESM>CDN] or [jsDelivr].

```js
import {} from "https://esm.sh/is-what";
import {} from "https://esm.run/is-what";
```

## Usage

🚀 Here's a basic demo of what this package can help you achieve! To get the
full documentation and see how each function inspects the type of a value, check
out our 📚 [documentation website]! You can also fire up [VS Code] or your
favorite IDE and get some awesome auto-complete with JSDoc comments to read
right in your editor! ❤️

```ts
import { isPlainObject } from "is-what";

console.log(isPlainObject({ a: 1, b: "hello" }));
//=> true

class Person {
  name: string;
  age: number;
  isAdult: boolean;
  constructor(options: { name: string; age: number }) {
    if (!isPlainObject(options)) {
      throw new TypeError(`${options} is not a plain object`);
    }
    this.name = options.name;
    this.age = options.age;
    this.isAdult = options.age >= 18;
  }
  [Symbol.toStringTag] = "Person";
}

const person = new Person({ name: "John", age: 20 });
console.log(person);
//=> { name: 'John', age: 20, isAdult: true }

console.log(new Person(person));
//=> TypeError: [object Person] is not a plain object
```

## Why?

I built is-what because the existing solutions were all too complex or too
poorly built.

I was looking for:

- A simple way to check any kind of type (including non-primitives)
- Be able to check if an object is a plain object `{}` or a special object (like
  a class instance)
- Let TypeScript automatically know what type a value is when checking

And that's exactly what `is-what` is! 😄 You might also want to check out some
other packages like the [Node.js `node:util/types` module], [is-plain-obj], and
[type-fest] for more type checking utilities.

[😊 Check out my other TypeScript packages!](https://github.com/search?q=user%3Amesqueeb+language%3ATypeScript&type=repositories)

## Development

![TypeScript](https://img.shields.io/static/v1?style=for-the-badge&message=TypeScript&color=3178C6&logo=TypeScript&logoColor=FFFFFF&label=)
![Node.js](https://img.shields.io/static/v1?style=for-the-badge&message=Node.js&color=339933&logo=Node.js&logoColor=FFFFFF&label=)

This package is written in TypeScript. We use npm to manage our dev
dependencies. Instead of using a custom test runner like [Jest] or [Vitest], we
are using the `node --test` and `node:test` builtin test runner! To get started,
just open this repository in your favorite IDE and run `npm start`. If you don't
want to leave your browser, you can use [GitHub Codespaces]!

```sh
npm start
```

This will start the test watcher. Make and edits you want! 👩‍💻 After you're
finished making your changes, you can run `npm test` to run the whole test
suite, and `npm pack` to build the package. Make sure you also do
`npm build:deno` every-so-often to make sure that our Deno-specific build of
this package works!

```sh
npm test
npm pack
npm run build:deno
```

<!-- prettier-ignore-start -->
[GitHub Codespaces]: https://github.com/features/codespaces
[Jest]: https://jestjs.io/
[Vitest]: https://vitest.dev/
[Node.js `node:util/types` module]: https://nodejs.org/api/util.html#util_util_types
[is-plain-obj]: https://www.npmjs.com/package/is-plain-obj
[type-fest]: https://www.npmjs.com/package/type-fest
[documentation website]: https://mesqueeb.github.io/is-what/
[VS Code]: https://code.visualstudio.com/
[deno.land/x]: https://deno.land/x/is_what
[ESM>CDN]: https://esm.sh/is-what
[Deno's new `npm:` prefix]: https://deno.com/manual@v1.34.1/node/npm_specifiers
[Yarn]: https://yarnpkg.com/
[pnpm]: https://pnpm.io/
[jsDelivr]: https://www.jsdelivr.com/esm
<!-- prettier-ignore-end -->
