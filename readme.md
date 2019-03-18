# p-waterfall [![Build Status](https://travis-ci.org/sindresorhus/p-waterfall.svg?branch=master)](https://travis-ci.org/sindresorhus/p-waterfall)

> Run promise-returning & async functions in series, each passing its result to the next


## Install

```
$ npm install p-waterfall
```


## Usage

```js
const pWaterfall = require('p-waterfall');

(async () => {
	const tasks = [
		initialValue => getEmoji(initialValue),
		previousValue => `I ❤️ ${previousValue}`
	];

	console.log(await pWaterfall(tasks, 'unicorn'));
	//=> 'I ❤️ 🦄'
})();
```


## API

### pWaterfall(tasks, [initialValue])

Returns a `Promise` that is fulfilled when all promises returned from calling the functions in `tasks` are fulfilled, or rejects if any of the promises reject. The fulfilled value is the value returned from the last task.

#### tasks

Type: `Iterable<Function>`

Functions are expected to return a value. If a `Promise` is returned, it's awaited before continuing with the next task.

#### initialValue

Type: `unknown`

Value to use as `previousValue` in the first task.


## Related

- [p-series](https://github.com/sindresorhus/p-series) - Run promise-returning & async functions in series
- [p-each-series](https://github.com/sindresorhus/p-each-series) - Iterate over promises serially
- [More…](https://github.com/sindresorhus/promise-fun)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
