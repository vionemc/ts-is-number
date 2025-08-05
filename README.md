# is-number [![NPM version](https://img.shields.io/npm/v/ts-is-number.svg?style=flat)](https://www.npmjs.com/package/ts-is-number) [![NPM monthly downloads](https://img.shields.io/npm/dm/ts-is-number.svg?style=flat)](https://npmjs.org/package/ts-is-number) [![NPM total downloads](https://img.shields.io/npm/dt/ts-is-number.svg?style=flat)](https://npmjs.org/package/ts-is-number) [![Linux Build Status](https://img.shields.io/travis/vionemc/ts-is-number.svg?style=flat&label=Travis)](https://travis-ci.org/vionemc/ts-is-number)

> Returns true if the value is a finite number.

Please consider following this project's author, [Aminah Nuraini](https://github.com/vionemc), and consider starring the project to show your :heart: and support.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save ts-is-number
```

## Why is this needed?

In TypeScript, it's not always as straightforward as it should be to reliably check if a value is a number. It's common for devs to use `+`, `-`, or `Number()` to cast a string value to a number (for example, when values are returned from user input, regex matches, parsers, etc). But there are many non-intuitive edge cases that yield unexpected results:

This is a Typescript refactor version from the Javascript version [is-number](https://github.com/jonschlinkert/is-number)

```ts
console.log(+[]); //=> 0
console.log(+''); //=> 0
console.log(+'   '); //=> 0
console.log(typeof NaN); //=> 'number'
```

This library offers a performant way to smooth out edge cases like these.

## Usage

```ts
import isNumber from 'ts-is-number';
```

See the [tests](./src/test/test.ts) for more examples.

### true

```ts
isNumber(5e3);               // true
isNumber(0xff);              // true
isNumber(-1.1);              // true
isNumber(0);                 // true
isNumber(1);                 // true
isNumber(1.1);               // true
isNumber(10);                // true
isNumber(10.10);             // true
isNumber(100);               // true
isNumber('-1.1');            // true
isNumber('0');               // true
isNumber('012');             // true
isNumber('0xff');            // true
isNumber('1');               // true
isNumber('1.1');             // true
isNumber('10');              // true
isNumber('10.10');           // true
isNumber('100');             // true
isNumber('5e3');             // true
isNumber(parseInt('012'));   // true
isNumber(parseFloat('012')); // true
```

### False

Everything else is false, as you would expect:

```js
isNumber(Infinity);          // false
isNumber(NaN);               // false
isNumber(null);              // false
isNumber(undefined);         // false
isNumber('');                // false
isNumber('   ');             // false
isNumber('foo');             // false
isNumber([1]);               // false
isNumber([]);                // false
isNumber(function () {});    // false
isNumber({});                // false
```

## Release history

### 1.0.0

* Refactoring from the Javascript version [is-number](https://github.com/jonschlinkert/is-number) to TypeScript

## Benchmarks

As with all benchmarks, take these with a grain of salt. See the [benchmarks](./benchmark/index.js) for more detail.

```
# all
v7.0 x 413,222 ops/sec ±2.02% (86 runs sampled)
v6.0 x 111,061 ops/sec ±1.29% (85 runs sampled)
parseFloat x 317,596 ops/sec ±1.36% (86 runs sampled)
fastest is 'v7.0'

# string
v7.0 x 3,054,496 ops/sec ±1.05% (89 runs sampled)
v6.0 x 2,957,781 ops/sec ±0.98% (88 runs sampled)
parseFloat x 3,071,060 ops/sec ±1.13% (88 runs sampled)
fastest is 'parseFloat,v7.0'

# number
v7.0 x 3,146,895 ops/sec ±0.89% (89 runs sampled)
v6.0 x 3,214,038 ops/sec ±1.07% (89 runs sampled)
parseFloat x 3,077,588 ops/sec ±1.07% (87 runs sampled)
fastest is 'v6.0'
```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 1 | [vionemc](https://github.com/vionemc) |

### Author

**Aminah Nuraini**

* [LinkedIn Profile](https://www.linkedin.com/in/aminah-nuraini/)
* [Upwork Profile](https://www.upwork.com/freelancers/aminahnuraini)
* [GitHub Profile](https://github.com/vionemc)

### License

Copyright © 2025, [Aminah Nuraini](https://github.com/vionemc).
Released under the [MIT License](LICENSE).

***