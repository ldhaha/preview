function Curried(fn) {
	const arr = [];

	function curry(...args) {
		arr.push(...args);
		if (arr.length >= fn.length) {
			return fn(...arr);
		}
		return curry;
	}
	return curry;
}

const add = Curried((a, b, c) => {
	return a + b + c;
});
console.log(add(1)(2)(3));
add(1, 2)(3);
