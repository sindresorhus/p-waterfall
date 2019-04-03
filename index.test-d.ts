import {expectType} from 'tsd';
import pWaterfall = require('.');

expectType<Promise<string>>(pWaterfall([() => `I ❤️ unicorn`]));
expectType<Promise<boolean>>(
	pWaterfall([() => `I ❤️ unicorn`, (string: string) => true])
);
expectType<Promise<number>>(
	pWaterfall([
		() => `I ❤️ unicorn`,
		(string: string) => true,
		(boolean: boolean) => 1
	])
);
expectType<Promise<null>>(
	pWaterfall([
		() => `I ❤️ unicorn`,
		(string: string) => true,
		(boolean: boolean) => 1,
		(number: number) => null
	])
);
expectType<Promise<{}>>(
	pWaterfall([
		() => `I ❤️ unicorn`,
		(string: string) => true,
		(boolean: boolean) => 1,
		(number: number) => Symbol(),
		(symbol: symbol) => ({})
	])
);
expectType<Promise<string>>(
	pWaterfall([
		() => `I ❤️ unicorn`,
		(string: string) => true,
		(boolean: boolean) => 1,
		(number: number) => Symbol(),
		(symbol: symbol) => ({}),
		(object: {}) => 'foo'
	])
);
expectType<Promise<number>>(
	pWaterfall([
		() => `I ❤️ unicorn`,
		(string: string) => true,
		(boolean: boolean) => 1,
		(number: number) => Symbol(),
		(symbol: symbol) => ({}),
		(object: {}) => 'foo',
		(string: string) => 1
	])
);
expectType<Promise<symbol>>(
	pWaterfall([
		() => `I ❤️ unicorn`,
		(string: string) => true,
		(boolean: boolean) => 1,
		(number: number) => Symbol(),
		(symbol: symbol) => ({}),
		(object: {}) => 'foo',
		(string: string) => 1,
		(number: number) => Symbol()
	])
);

expectType<Promise<string>>(
	pWaterfall([previousValue => `I ❤️ ${previousValue}`], 'unicorn')
);
expectType<Promise<boolean>>(
	pWaterfall(
		[previousValue => `I ❤️ ${previousValue}`, (string: string) => true],
		'unicorn'
	)
);
expectType<Promise<number>>(
	pWaterfall(
		[
			previousValue => `I ❤️ ${previousValue}`,
			(string: string) => true,
			(boolean: boolean) => 1
		],
		'unicorn'
	)
);
expectType<Promise<null>>(
	pWaterfall(
		[
			previousValue => `I ❤️ ${previousValue}`,
			(string: string) => true,
			(boolean: boolean) => 1,
			(number: number) => null
		],
		'unicorn'
	)
);
expectType<Promise<{}>>(
	pWaterfall(
		[
			previousValue => `I ❤️ ${previousValue}`,
			(string: string) => true,
			(boolean: boolean) => 1,
			(number: number) => Symbol(),
			(symbol: symbol) => ({})
		],
		'unicorn'
	)
);
expectType<Promise<string>>(
	pWaterfall(
		[
			previousValue => `I ❤️ ${previousValue}`,
			(string: string) => true,
			(boolean: boolean) => 1,
			(number: number) => Symbol(),
			(symbol: symbol) => ({}),
			(object: {}) => 'foo'
		],
		'unicorn'
	)
);
expectType<Promise<number>>(
	pWaterfall(
		[
			previousValue => `I ❤️ ${previousValue}`,
			(string: string) => true,
			(boolean: boolean) => 1,
			(number: number) => Symbol(),
			(symbol: symbol) => ({}),
			(object: {}) => 'foo',
			(string: string) => 1
		],
		'unicorn'
	)
);
expectType<Promise<symbol>>(
	pWaterfall(
		[
			previousValue => `I ❤️ ${previousValue}`,
			(string: string) => true,
			(boolean: boolean) => 1,
			(number: number) => Symbol(),
			(symbol: symbol) => ({}),
			(object: {}) => 'foo',
			(string: string) => 1,
			(number: number) => Symbol()
		],
		'unicorn'
	)
);

expectType<Promise<unknown>>(
	pWaterfall(
		new Set([
			(previousValue: unknown) => {
				if (typeof previousValue === 'string') {
					return `I ❤️ ${previousValue}`;
				}
			},
			(string: unknown) => {
				if (typeof string === 'string') {
					return true;
				}
			},
			(boolean: unknown) => {
				if (typeof boolean === 'boolean') {
					return 1;
				}
			},
			(number: unknown) => {
				if (typeof number === 'number') {
					return null;
				}
			},
			(nullValue: unknown) => {
				if (nullValue === null) {
					return undefined;
				}
			}
		]),
		'unicorn'
	)
);
