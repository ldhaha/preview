function curried(fn) {
	function curry(...args) {
		arr.push(...args);
		if (arr.length === fn.length) {
			fn.call(this, ...arr);
		} else {
			return function (...args2) {
				return curry.apply(this, ...[...args, ...args2]);
			};
		}
	}
	return curry;
}
