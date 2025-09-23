function deepClone(obj, map = new WeakMap()) {
	if (typeof obj !== 'object' || obj === null) {
		return obj;
	}
	if (map.get(obj)) {
		return map.get(obj);
	}
	const res = Array.isArray(obj) ? [] : {};
	map.set(obj, res);
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			res[key] = deepClone(obj[key]);
		}
	}
	return res;
}
