/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let i = 0; // 慢指针，指向当前唯一元素的位置

    for (let j = 1; j < nums.length; j++) {
        // 当找到不同的元素时
        if (nums[j] !== nums[i]) {
            i++; // 移动慢指针
            nums[i] = nums[j]; // 把新元素放到正确位置
        }
    }
    return i + 1; // 返回新长度
};
// [1,1,2]   2,1  0 1


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 2;
    for (let j = 2; j < nums.length; j++) {
        if (nums[j] !== nums[i - 2]) {
            nums[i++] = nums[j]
        }
    }
    return i
};