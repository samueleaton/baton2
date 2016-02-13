'use strict';

module.exports = function () {

	function each(list, cb) {
		if (typeof cb !== 'function') return list;
		for (var i = 0, ii = list.length; i < ii; i++) {
			cb(list[i]);
		}
	}

	var utils = {
		// the queue that will hold all of the function in the series
		queue: [],

		// index starts at -1 so that the first item is index zero
		i: -1
	};

	/* Initiates Fang Series
 */
	function init() {
		utils.i = -1;
		return next.apply(undefined, arguments);
	}

	/* Runs the Next Function in the Series
 */
	function next() {
		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		// if the next function has been defined
		if (typeof utils.queue[utils.i + 1] !== 'undefined') {
			var _utils$queue;

			args.unshift(next);
			utils.i++;
			return (_utils$queue = utils.queue)[utils.i].apply(_utils$queue, args);
		}

		// if there are no more function, next will re-init fang group
		return init(args);
	}

	for (var _len = arguments.length, param = Array(_len), _key = 0; _key < _len; _key++) {
		param[_key] = arguments[_key];
	}

	each(param, function (f) {
		if (typeof f === 'function') utils.queue.push(f);
	});

	return function () {
		return init.apply(undefined, arguments);
	};
};

