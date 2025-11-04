function myNew() {
	const obj = {};
	const constructor = [].shift.call(arguments);
	obj.__proto__ = constructor.prototype;
	const res = constructor.call(obj, ...arguments);
	return typeof res === 'object' ? res : object;
}
