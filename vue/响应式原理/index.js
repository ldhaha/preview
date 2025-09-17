let activeEffect;

const effectStack = [];

let bucket = new WeakMap();

const data = { ok: true, title: 'lindong', foo: 0, watch: 1 };

const obj = new Proxy(data, {
	get(target, key, receiver) {
		if (!activeEffect) return target[key];
		const res = Reflect.get(target, key, receiver);
		track(target, key);
		return res;
	},
	set(target, key, value, receiver) {
		const oldValue = target[key];
		const res = Reflect.set(target, key, value, receiver);
		if (oldValue !== value) {
			trigger(target, key);
		}
		return res;
	},
});

function track(target, key) {
	if (!activeEffect) return;
	let depsMap = bucket.get(target);
	if (!depsMap) {
		bucket.set(target, (depsMap = new Map()));
	}
	let depsSet = depsMap.get(key);
	if (!depsSet) {
		depsMap.set(key, (depsSet = new Set()));
	}
	depsSet.add(activeEffect);
	activeEffect.deps.push(depsSet);
}

function trigger(target, key) {
	const depsMap = bucket.get(target);
	if (!depsMap) return;
	const effects = depsMap.get(key);
	// effect.forEach(fn => fn())
	const effestsToRun = new Set();
	effects.forEach(fn => {
		if (fn !== activeEffect) {
			effestsToRun.add(fn);
		}
	});
	effestsToRun?.forEach(fn => {
		if (fn.options.scheduler) {
			fn.options.scheduler(fn);
		} else {
			fn();
		}
	});
}

function effect(fn, options = {}) {
	const effectFn = () => {
		cleanUp(effectFn);
		effectStack.push(effectFn);
		activeEffect = effectFn;
		const res = fn();
		effectStack.pop();
		activeEffect = effectStack[effectStack.length - 1];
		return res;
	};
	effectFn.options = options;
	effectFn.deps = [];
	if (options.lazy) {
		return effectFn;
	} else {
		effectFn();
	}
}

function cleanUp(effectFn) {
	for (let i = 0; i < effectFn.deps.length; i++) {
		const depsSet = effectFn.deps[i];
		depsSet.delete(effectFn);
	}
	effectFn.deps.length = 0;
}

// effect(() => {
// 	console.log(obj.foo);
// });

obj.foo++;
obj.foo++; //会连续输出两次

const jobQueue = new Set();
let p = Promise.resolve();
let isFlush = false;
function flushJob() {
	if (isFlush) return;
	isFlush = true;
	p.then(() => {
		jobQueue.forEach(job => job());
	}).finally(() => {
		isFlush = false;
	});
}

// effect(
// 	() => {
// 		console.log(obj.foo);
// 	},
// 	{
// 		scheduler(fn) {
// 			jobQueue.add(fn);
// 			flushJob();
// 		},
// 	}
// );

// computed 与 lazy
console.log('---------------------computed-----------------------');
let lazy = false;
const lazyEffect = effect(() => obj.foo + obj.title, {
	lazy: true,
});
// console.log(lazyEffect());

// 实现computed
function computed(getter) {
	let value;
	let dirty = true;
	let effectFn = effect(getter, {
		lazy: true,
		scheduler() {
			if (!dirty) {
				dirty = true;
				trigger(obj, 'value');
			}
		},
	});
	let obj = {
		get value() {
			if (dirty) {
				value = effectFn();
				dirty = false;
			}
			track(obj, 'value');
			return value;
		},
	};

	return obj;
}

const a = computed(() => obj.foo + obj.title);

effect(() => {
	console.log(a.value);
});
obj.foo++;

let c = 15;
const d = computed(() => {
	console.log(obj.foo);
	return c;
});
console.log(d.value);
obj.foo++;
c = 16;
console.log(d.value);

// watch实现
console.log('-----------------watch实现-----------------');
function watch(source, callback, options = {}) {
	let getter;
	if (typeof source === 'function') {
		getter = source;
	} else {
		getter = () => traverse(source);
	}
	let oldValue, newValue;
	let cleanup;
	function onInvalidate(fn) {
		cleanup = fn;
	}
	const job = () => {
		newValue = effectFn();
		if (cleanup) {
			cleanup();
		}
		callback(newValue, oldValue, onInvalidate);
		oldValue = newValue;
	};
	const effectFn = effect(() => getter(), {
		lazy: true,
		scheduler: () => {
			if (options.flush === 'post') {
				Promise.resolve().then(job);
			} else {
				job();
			}
		},
	});
	if (options.immediate) {
		job();
	} else {
		oldValue = effectFn();
	}
}

function traverse(value, seen = new Set()) {
	if (typeof value !== 'object' || value === null || seen.has(value)) return;
	seen.add(value);
	if (typeof value === 'object') {
		for (const key in value) {
			traverse(value[key], seen);
		}
	}
}

let count = 2;
const asyncFunction = async () => {
	count--;
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(count);
		}, count * 1000);
	});
};

watch(
	() => obj.watch,
	async (newValue, oldValue, onInvalidate) => {
		let expired = false;
		onInvalidate(() => {
			expired = true;
		});
		const res = await asyncFunction();
		if (expired) return;
		console.log(res);
	},
	{ immediate: true }
);
obj.watch++;
