function bigAdd(a, b) {
	let pre = 0;
	const res = [];
	const arr_a = a.split(',');
	const arr_b = b.split(',');
	const min_arr = arr_a.length > arr_b.length ? arr_b : arr_a;
	const max_arr = arr_a.length > arr_b.length ? arr_a : arr_b;
	for (let j = min_arr.length - 1; j >= 0; j--) {
		const sum = Number(arr_a[j]) + Number(arr_b[j]) + pre;
		pre = Math.floor(sum / 10);
		res.unshift(sum % 10);
	}
	if (min_arr.length === max_arr.length && pre) {
		res.unshift(pre);
	} else {
		for (let j = max_arr.length - min_arr.length - 1; j >= 0; j--) {
			const sum = Number(max_arr[j]) + pre;
			pre = Math.floor(sum / 10);
			res.unshift(sum % 10);
		}
		if (pre) {
			res.unshift(pre);
		}
	}
	return res.join('');
}

console.log(bigAdd('2222', '88889'));
