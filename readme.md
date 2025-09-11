# p-waterfall

> Run promise-returning & async functions in series, each passing its result to the next

## Install

```sh
npm install p-waterfall
```

## Usage

```js
import pWaterfall from 'p-waterfall';

const tasks = [
	initialValue => getEmoji(initialValue),
	previousValue => `I ❤️ ${previousValue}`
];

console.log(await pWaterfall(tasks, 'unicorn'));
//=> 'I ❤️ 🦄'
```

## API

### pWaterfall(tasks, initialValue?)

Returns a `Promise` that is fulfilled when all promises returned from calling the functions in `tasks` are fulfilled, or rejects if any of the promises reject. The fulfilled value is the value returned from the last task.

#### tasks

Type: `Iterable<Function>`

Functions are expected to return a value. If a `Promise` is returned, it's awaited before continuing with the next task.

#### initialValue

Type: `unknown`

Value to use as `previousValue` in the first task.

## TypeScript

Use [`as const`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions) to improve type inference when defining task arrays outside of `pWaterfall()`:

```ts
const tasks = [
	() => 'unicorn',
	previousValue => `I ❤️ ${previousValue}`,
	string => string.length
] as const;

await pWaterfall(tasks); // Returns a `Promise<number>` (the return type of the last task)
```

## Related

- [p-series](https://github.com/sindresorhus/p-series) - Run promise-returning & async functions in series
- [p-each-series](https://github.com/sindresorhus/p-each-series) - Iterate over promises serially
- [More…](https://github.com/sindresorhus/promise-fun)
