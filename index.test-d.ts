/* eslint-disable symbol-description */
import {expectType} from 'tsd';
import pWaterfall from './index.js';

expectType<Promise<string>>(pWaterfall([() => 'I ❤️ unicorn']));
expectType<Promise<boolean>>(
	pWaterfall([() => 'I ❤️ unicorn', (string: string) => true])
);
expectType<Promise<number>>(
	pWaterfall([
		() => 'I ❤️ unicorn',
		(string: string) => true,
		(boolean: boolean) => 1
	])
);
expectType<Promise<null>>(
	pWaterfall([
		() => 'I ❤️ unicorn',
		(string: string) => true,
		(boolean: boolean) => 1,
		(number: number) => null
	])
);
expectType<Promise<{}>>( // eslint-disable-line @typescript-eslint/ban-types
	pWaterfall([
		() => 'I ❤️ unicorn',
		(string: string) => true,
		(boolean: boolean) => 1,
		(number: number) => Symbol(),
		(symbol: symbol) => ({})
	])
);
expectType<Promise<string>>(
	pWaterfall([
		() => 'I ❤️ unicorn',
		(string: string) => true,
		(boolean: boolean) => 1,
		(number: number) => Symbol(),
		(symbol: symbol) => ({}),
		(object: Record<string, unknown>) => 'foo'
	])
);
expectType<Promise<number>>(
	pWaterfall([
		() => 'I ❤️ unicorn',
		(string: string) => true,
		(boolean: boolean) => 1,
		(number: number) => Symbol(),
		(symbol: symbol) => ({}),
		(object: Record<string, unknown>) => 'foo',
		(string: string) => 1
	])
);
expectType<Promise<symbol>>(
	pWaterfall([
		() => 'I ❤️ unicorn',
		(string: string) => true,
		(boolean: boolean) => 1,
		(number: number) => Symbol(),
		(symbol: symbol) => ({}),
		(object: Record<string, unknown>) => 'foo',
		(string: string) => 1,
		(number: number) => Symbol()
	])
);

expectType<Promise<string>>(
	pWaterfall([previousValue => `I ❤️ ${previousValue}`], 'unicorn')
);
expectType<Promise<true>>(
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
expectType<Promise<{}>>( // eslint-disable-line @typescript-eslint/ban-types
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
			(object: Record<string, unknown>) => 'foo'
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
			(object: Record<string, unknown>) => 'foo',
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
			(object: Record<string, unknown>) => 'foo',
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

const tasks1 = [() => 'I ❤️ unicorn'] as const;
expectType<Promise<string>>(pWaterfall(tasks1));

const tasks2 = [
	() => 'I ❤️ unicorn',
	(string: string) => true,
	(boolean: boolean) => 1,
	(number: number) => null
] as const;
expectType<Promise<null>>(pWaterfall(tasks2));
