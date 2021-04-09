import pReduce from 'p-reduce';

export default async function pWaterfall(iterable, initialValue) {
	return pReduce(iterable, (previousValue, function_) => function_(previousValue), initialValue);
}
