/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	if (nums.length === 1) return nums[0];
	const total = Math.floor(nums.length / 2);
	nums = nums.sort((a, b) => a - b);
	let j = 1;
	for (let i = 0; i < nums.length; i++) {
		while (j < nums.length && nums[i] === nums[j]) {
			if (nums[i] === nums[j]) {
				if (j - i >= total) {
					return nums[i];
				}
			}
			j++;
		}
		i = j - 1;
		j = i + 1;
	}
};

console.log(majorityElement([3, 2, 3]));
// [1,1,1,2,2,2,2]
