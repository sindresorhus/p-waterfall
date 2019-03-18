export type Task<ValueType, ReturnType> = (
	previousValue: ValueType
) => ReturnType | PromiseLike<ReturnType>;
export type InitialTask<ReturnType> = () =>
	| ReturnType
	| PromiseLike<ReturnType>;

/**
 * Run promise-returning & async functions in series, each passing its result to the next.
 *
 * @param tasks - Functions are expected to return a value. If a `Promise` is returned, it's awaited before continuing with the next task.
 * @param initialValue - Value to use as `previousValue` in the first task.
 * @returns Resolves when all promises returned from calling the functions in `tasks` are fulfilled, or rejects if any of the promises reject. The fulfilled value is the value returned from the last task.
 */
export default function pWaterfall<ReturnType>(
	tasks: [InitialTask<ReturnType>]
): Promise<ReturnType>;
export default function pWaterfall<ValueType1, ReturnType>(
	tasks: [InitialTask<ValueType1>, Task<ValueType1, ReturnType>]
): Promise<ReturnType>;
export default function pWaterfall<ValueType1, ValueType2, ReturnType>(
	tasks: [
		InitialTask<ValueType1>,
		Task<ValueType1, ValueType2>,
		Task<ValueType2, ReturnType>
	]
): Promise<ReturnType>;
export default function pWaterfall<
	ValueType1,
	ValueType2,
	ValueType3,
	ReturnType
>(
	tasks: [
		InitialTask<ValueType1>,
		Task<ValueType1, ValueType2>,
		Task<ValueType2, ValueType3>,
		Task<ValueType3, ReturnType>
	]
): Promise<ReturnType>;
export default function pWaterfall<
	ValueType1,
	ValueType2,
	ValueType3,
	ValueType4,
	ReturnType
>(
	tasks: [
		InitialTask<ValueType1>,
		Task<ValueType1, ValueType2>,
		Task<ValueType2, ValueType3>,
		Task<ValueType3, ValueType4>,
		Task<ValueType4, ReturnType>
	]
): Promise<ReturnType>;
export default function pWaterfall<
	ValueType1,
	ValueType2,
	ValueType3,
	ValueType4,
	ValueType5,
	ReturnType
>(
	tasks: [
		InitialTask<ValueType1>,
		Task<ValueType1, ValueType2>,
		Task<ValueType2, ValueType3>,
		Task<ValueType3, ValueType4>,
		Task<ValueType4, ValueType5>,
		Task<ValueType5, ReturnType>
	]
): Promise<ReturnType>;
export default function pWaterfall<
	ValueType1,
	ValueType2,
	ValueType3,
	ValueType4,
	ValueType5,
	ValueType6,
	ReturnType
>(
	tasks: [
		InitialTask<ValueType1>,
		Task<ValueType1, ValueType2>,
		Task<ValueType2, ValueType3>,
		Task<ValueType3, ValueType4>,
		Task<ValueType4, ValueType5>,
		Task<ValueType5, ValueType6>,
		Task<ValueType6, ReturnType>
	]
): Promise<ReturnType>;
export default function pWaterfall<
	ValueType1,
	ValueType2,
	ValueType3,
	ValueType4,
	ValueType5,
	ValueType6,
	ValueType7,
	ReturnType
>(
	tasks: [
		InitialTask<ValueType1>,
		Task<ValueType1, ValueType2>,
		Task<ValueType2, ValueType3>,
		Task<ValueType3, ValueType4>,
		Task<ValueType4, ValueType5>,
		Task<ValueType5, ValueType6>,
		Task<ValueType6, ValueType7>,
		Task<ValueType7, ReturnType>
	]
): Promise<ReturnType>;

export default function pWaterfall<ValueType1, ReturnType>(
	tasks: [Task<ValueType1, ReturnType>],
	initialValue: ValueType1
): Promise<ReturnType>;
export default function pWaterfall<ValueType1, ValueType2, ReturnType>(
	tasks: [Task<ValueType1, ValueType2>, Task<ValueType2, ReturnType>],
	initialValue: ValueType1
): Promise<ReturnType>;
export default function pWaterfall<
	ValueType1,
	ValueType2,
	ValueType3,
	ReturnType
>(
	tasks: [
		Task<ValueType1, ValueType2>,
		Task<ValueType2, ValueType3>,
		Task<ValueType3, ReturnType>
	],
	initialValue: ValueType1
): Promise<ReturnType>;
export default function pWaterfall<
	ValueType1,
	ValueType2,
	ValueType3,
	ValueType4,
	ReturnType
>(
	tasks: [
		Task<ValueType1, ValueType2>,
		Task<ValueType2, ValueType3>,
		Task<ValueType3, ValueType4>,
		Task<ValueType4, ReturnType>
	],
	initialValue: ValueType1
): Promise<ReturnType>;
export default function pWaterfall<
	ValueType1,
	ValueType2,
	ValueType3,
	ValueType4,
	ValueType5,
	ReturnType
>(
	tasks: [
		Task<ValueType1, ValueType2>,
		Task<ValueType2, ValueType3>,
		Task<ValueType3, ValueType4>,
		Task<ValueType4, ValueType5>,
		Task<ValueType5, ReturnType>
	],
	initialValue: ValueType1
): Promise<ReturnType>;
export default function pWaterfall<
	ValueType1,
	ValueType2,
	ValueType3,
	ValueType4,
	ValueType5,
	ValueType6,
	ReturnType
>(
	tasks: [
		Task<ValueType1, ValueType2>,
		Task<ValueType2, ValueType3>,
		Task<ValueType3, ValueType4>,
		Task<ValueType4, ValueType5>,
		Task<ValueType5, ValueType6>,
		Task<ValueType6, ReturnType>
	],
	initialValue: ValueType1
): Promise<ReturnType>;
export default function pWaterfall<
	ValueType1,
	ValueType2,
	ValueType3,
	ValueType4,
	ValueType5,
	ValueType6,
	ValueType7,
	ReturnType
>(
	tasks: [
		Task<ValueType1, ValueType2>,
		Task<ValueType2, ValueType3>,
		Task<ValueType3, ValueType4>,
		Task<ValueType4, ValueType5>,
		Task<ValueType5, ValueType6>,
		Task<ValueType6, ValueType7>,
		Task<ValueType7, ReturnType>
	],
	initialValue: ValueType1
): Promise<ReturnType>;
export default function pWaterfall<
	ValueType1,
	ValueType2,
	ValueType3,
	ValueType4,
	ValueType5,
	ValueType6,
	ValueType7,
	ValueType8,
	ReturnType
>(
	tasks: [
		Task<ValueType1, ValueType2>,
		Task<ValueType2, ValueType3>,
		Task<ValueType3, ValueType4>,
		Task<ValueType4, ValueType5>,
		Task<ValueType5, ValueType6>,
		Task<ValueType6, ValueType7>,
		Task<ValueType7, ValueType8>,
		Task<ValueType8, ReturnType>
	],
	initialValue: ValueType1
): Promise<ReturnType>;
export default function pWaterfall(
	tasks: Iterable<Task<unknown, unknown>>,
	initialValue?: unknown
): Promise<unknown>;
