var baton = (function(){
	
	// "use strict";

	// Initiates Baton Series
	var _b = {
		// Adds Function to Baton Series
		then: function(_callback){
			if(typeof _callback === "function") _b.utils.queue.push(_callback);
			return _b;
		},

		// Runs the Next Function in the Series
		next: function(){
			// converts all incoming arguments into array
			var args = Array.prototype.splice.call(arguments, 0);

			// if a proceeding function has been defined (using the 'then' method)
			if(typeof _b.utils.queue[_b.utils.i+1] !== "undefined"){

				// increment the current call index
				_b.utils.i++;

				// run the next function
				return _b.utils.queue[_b.utils.i].apply({next:_b.next}, args);
			}
		},

		utils: {
			// the queue that will hold all of the function in the series
			queue:[], 

			// index starts at -1 so that the first item is index zero
			i:-1 
		}
	};
	

	return function(){

		var args = [];
		for(var i = 0, ii = arguments.length; i < ii; i++){
			if(typeof arguments[i] === "function") args.push(arguments[i]);
		}

		var newBaton = Object.create(_b);
		for(var i = 0, ii = args.length; i < ii; i++){
			newBaton = newBaton.then(args[i]);
		}

		function run(){
			var args = [];
			for(var i = 0, ii = arguments.length; i < ii; i++){
				args.push(arguments[i]);
			}
			newBaton.utils.i = -1;
			return newBaton.next.apply(null, args);
		}

		run.append = newBaton.then;

		return run;
	};
})();