import test from 'ava';
import m from './';

test(async t => {
	const input = [
		async prev => prev + 1,
		prev => prev + 2,
		async prev => prev + 3
	];

	t.is(await m(input, 0), 6);

	const fixtureErr = new Error('fixture');
	await t.throws(m([async () => Promise.reject(fixtureErr)]), fixtureErr.message);
});
