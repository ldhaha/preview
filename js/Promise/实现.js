const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function runMicroTask(callback) {
	if (process && process.nextTick) {
		process.nextTick(callback);
	} else {
		requestAnimationFrame(callback);
	}
}

function dealReturnPromise(returnValue, resolve, reject, p) {
	runMicroTask(() => {
		if (p === returnValue) {
			throw new TypeError('Chaining cycle detected for promise');
		}
		if (returnValue instanceof MyPromise) {
			returnValue.then(resolve, reject, 2);
		} else {
			resolve(returnValue);
		}
	});
}

class MyPromise {
	constructor(executor) {
		this.value = null;
		this.reason = null;
		this.status = PENDING;
		this.onFulfilledCallbacks = [];
		this.onRejectedCallbacks = [];
		this.resolve = value => {
			if (this.status === PENDING) {
				this.status = FULFILLED;
				this.value = value;
				while (this.onFulfilledCallbacks.length) {
					const { cb, resolve, reject, self } = this.onFulfilledCallbacks.shift();
					if (typeof cb === 'function') {
						const res = cb(this.value);
						dealReturnPromise(res, resolve, reject, self);
					} else {
						resolve(this.value);
					}
				}
			}
		};
		this.reject = reason => {
			if (this.status === PENDING) {
				this.status = REJECTED;
				this.reason = reason;
				while (this.onRejectedCallbacks.length) {
					const { cb, resolve, reject, self } = this.onRejectedCallbacks.shift();
					if (typeof cb === 'function') {
						const res = cb(this.reason);
						dealReturnPromise(res, resolve, reject, self);
					} else {
						reject(this.reason);
					}
				}
			}
		};
		try {
			executor(this.resolve, this.reject);
		} catch (error) {
			this.reject(error);
		}
	}

	then(onFulfilled, onRejected) {
		const p = new MyPromise((resolve, reject) => {
			if (this.status === FULFILLED) {
				if (typeof FULFILLED === 'function') {
					const returnValue = onFulfilled(this.value);
					dealReturnPromise(returnValue, resolve, reject, p);
				} else {
					resolve(this.value);
				}
			} else if (this.status === REJECTED) {
				if (typeof REJECTED === 'function') {
					const returnValue = onRejected(this.reason);
					dealReturnPromise(returnValue, resolve, reject, p);
				} else {
					reject(this.reason);
				}
			} else {
				runMicroTask(() => {
					this.onFulfilledCallbacks.push({ cb: onFulfilled, resolve, reject, self: p });
					this.onRejectedCallbacks.push({ cb: onRejected, resolve, reject, self: p });
				});
			}
		});

		return p;
	}
}

const p = new MyPromise((resolve, reject) => {
	resolve('123');
});

const p2 = p.then(null, res => {
	console.log(res);
});

setTimeout(() => {
	console.log('p2', p2);
}, 1000);
