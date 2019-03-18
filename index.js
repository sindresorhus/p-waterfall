'use strict';
const pReduce = require('p-reduce');

const pWaterfall = (iterable, initialValue) =>
	pReduce(iterable, (previousValue, fn) => fn(previousValue), initialValue);

module.exports = pWaterfall;
module.exports.default = pWaterfall;
