/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let rightMax = 0;
	let max = 0;
	for (let i = prices.length - 1; i >= 0; i--) {
		rightMax = Math.max(rightMax, prices[i]);
		max = Math.max(max, rightMax - prices[i]);
	}
	return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
