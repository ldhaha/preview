let activeEffect;

const effectStack = [];

let bucket = new WeakMap();

function createReactive(obj, isShallow = false, isReadonly = false) {
	console.log('createReactive', obj, isShallow, isReadonly);
	return new Proxy(obj, {
		get(target, key, receiver) {
			if (key === 'raw') {
				return target;
			}
			// 只读的时候不需要建立响应式联系
			if (!isReadonly) {
				track(target, key);
			}

			const res = Reflect.get(target, key, receiver);

			if (isShallow) {
				return res;
			}
			// 解决深层响应的问题
			if (typeof res === 'object' && res !== null) {
				return isReadonly ? readonly(res) : reactive(res);
			}
			return res;
		},
		set(target, key, value, receiver) {
			if (isReadonly) {
				return true;
			}
			const oldValue = target[key];
			const res = Reflect.set(target, key, value, receiver);
			if (oldValue !== value && target === receiver.raw) {
				trigger(target, key);
			}
			return res;
		},
	});
}

function reactive(obj) {
	return createReactive(obj);
}

function shallowReactive(obj) {
	return createReactive(obj, true);
}

function readonly(obj) {
	return createReactive(obj, false, true);
}

function shallowReadonly(obj) {
	console.log('shallowReadonly', obj);
	return createReactive(obj, true, true);
}

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

const obj = {};
const proto = { bar: 1 };
const child = reactive(obj);
const parent = reactive(proto);

Object.setPrototypeOf(child, parent);
effect(() => {
	console.log(child.bar);
});
child.bar = 2;

// const ld = shallowReadonly({ obj: { foo: 1 } });

// console.log('ld', ld.obj);
// console.log(ld);
