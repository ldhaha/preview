const obj = {
	a: 1,
	b: 2
}

const cl = Object.keys(obj);
console.log(cl[Symbol.iterator]().next().value)

const ld = new map();
ld.set('a', 1);
ld.set('b', 2);
console.log(ld.keys());
