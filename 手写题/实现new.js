function myNew() {
	const obj = {};
	const constructor = [].shift.call(arguments);
	obj.__pro__to = constructor.prototype;
	const res = constructor.call(obj, ...arguments);
	return typeof res === 'object' ? res : object;
}
