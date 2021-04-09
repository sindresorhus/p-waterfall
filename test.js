import test from 'ava';
import pWaterfall from './index.js';

test('main', async t => {
	const input = [
		async previousValue => previousValue + 1,
		previousValue => previousValue + 2,
		async previousValue => previousValue + 3
	];

	t.is(await pWaterfall(input, 0), 6);
});

test('throws when one of the input functions rejects', async t => {
	const fixtureError = new Error('fixture');

	await t.throwsAsync(
		pWaterfall([() => Promise.reject(fixtureError)]),
		{message: fixtureError.message}
	);
});
