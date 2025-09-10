function myAll(promises) {
	let count = 0;
	let res = [];
	return new Promise((resolve, reject) => {
		[...promises].forEach((promise, index) => {
			Promise.resolve(promise)
				.then(data => {
					res[index] = data;
					count++;

					// 不能用res.length，因为可能不是按顺序来的,比如最后一个先先完成，这时候就会直接resolve了
					if (count === promises.length) {
						resolve(res);
					}
				})
				.catch(err => {
					reject(err);
				});
		});
	});
}

function myRace(promises) {
	return new Promise((resolve, reject) => {
		[...promises].forEach(promise => {
			Promise.resolve(promise)
				.then(data => {
					resolve(data);
				})
				.catch(err => {
					reject(err);
				});
		});
	});
}

function mySellted(promises) {
	return new Promise((resolve, reject) => {
		const res = [];
		let count = 0;
		[...promises].forEach((promise, index) => {
			Promise.resolve(promise)
				.then(data => {
					res[index] = { status: 'fulfilled', value: data };
				})
				.catch(err => {
					res[index] = { status: 'rejected', reason: err };
				})
				.finally(() => {
					count++;
					if (count === promises.length) {
						resolve(res);
					}
				});
		});
	});
}

function myAny(promises) {
	let count = 0;
	return new Promise((resolve, reject) => {
		[...promises].forEach((promise, index) => {
			Promise.resolve(promise)
				.then(data => {
					resolve(data);
				})
				.catch(err => {
					count++;
					if (count === promises.length) {
						reject(err);
					}
				});
		});
	});
}
