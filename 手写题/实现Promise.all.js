Promise.prototype.myAll = function (promises) {
	return new Promise((resolve, reject) => {
		if (!Array.isArray(promises)) {
			reject(new TypeError('arguments must be an array'));
			return;
		}
		const res = [];
		let count = 0;
		promises.forEach((promise, index) => {
			Promise.resolve(promise)
				.then(val => {
					res[index] = val;
					count++;
					if (count === promises.length) {
						resolve(res);
					}
				})
				.catch(err => {
					reject(err);
				});
		});
	});
};
