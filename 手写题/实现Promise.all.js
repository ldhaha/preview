Promise.prototype.myAll = function (promises) {
	return new Promise((resolve, reject) => {
		if (!Array.isArray(promises)) {
			reject(new TypeError('arguments must be an array'));
			return;
		}
		const res = [];
		let count = 0;
		for (let i = 0; i < promises.length; i++) {
			Promise.resolve(promises[i])
				.then(val => {
					res[i] = val;
					count++;
					if (count === promises.length) {
						resolve(res);
					}
				})
				.catch(err => {
					reject(err);
				});
		}
		// promises.forEach((promise, index) => {
		// 	Promise.resolve(promise)
		// 		.then(val => {
		// 			res[index] = val;
		// 			count++;
		// 			if (count === promises.length) {
		// 				resolve(res);
		// 			}
		// 		})
		// 		.catch(err => {
		// 			reject(err);
		// 		});
		// });
	});
};
