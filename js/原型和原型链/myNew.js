function Person(name) {
	this.name = name;
}

function myNew() {
	const constructor = [].shift.call(arguments);
	const obj = {};
	obj.__proto__ = constructor.prototype;
	const res = constructor.apply(obj, arguments);
	return typeof res === 'object' ? res : obj;
}

const p = myNew(Person, '张三');
console.log(p);
