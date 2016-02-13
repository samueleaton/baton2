module.exports = function (...param) {
	
	function each(list, cb) {
		if (typeof cb !== 'function')
			return list;
		for (let i = 0, ii = list.length; i < ii; i++)
			cb(list[i]);
	}

	const utils = {
		// the queue that will hold all of the function in the series
		queue: [],

		// index starts at -1 so that the first item is index zero
		i: -1
	};

	/* Initiates Fang Series
	*/
	function init(...args) {
		utils.i = -1;
		return next(...args);
	}

	/* Runs the Next Function in the Series
	*/
	function next(...args) {
		// if the next function has been defined
		if (typeof utils.queue[utils.i + 1] !== 'undefined') {
			args.unshift(next);
			utils.i++;
			return utils.queue[utils.i](...args);
		}

		// if there are no more function, next will re-init fang group
		return init(args);
	}

	each(param, f => {
		if (typeof f === 'function')
			utils.queue.push(f);
	});

	return (...args) => init(...args);
};
