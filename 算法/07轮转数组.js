var rotate = function (nums, k) {
	const count = k % nums.length;
	nums.unshift(...nums.splice(nums.length - count, nums.length));
	console.log(nums);
};

rotate([-1, -100, 3, 99], 2);
