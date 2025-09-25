/**
 * 标题
缺失的区间

题目描述
给定一个排序的整数数组 nums,其中元素的范围在闭区间 [lower，upper]当中，返回不包含在数组中的缺失空间​

case 1:​
Input: [0, 1, 3, 50, 75] ,lower = 0, upper = 99 ​
Output：["2", "4->49", "51->74", "76->99"]​

case 2:​
Input: [0, 1, 3, 50, 75] ,lower = 5, upper = 70​
Output：[ "5->49", "51->70"]​

case 3:​
Input: nums = [-1], lower = -1, upper = -1​
Output: []​

case 4:​
Input: nums = [2], lower = -1, upper = 5​
Output: ['-1->1', '3->5']​

case 5:​
Input: nums = [2], lower = 3, upper = 5​
Output: [ '3->5']
 */
function findMissingRanges(nums, lower, upper) {
    const result = [];
    let prev = lower - 1; // 上一个覆盖到的数字

    // 在数组末尾添加 upper+1，方便统一处理结尾
    const extendedNums = [...nums, upper + 1];

    for (const num of extendedNums) {
        if (num > prev + 1) {
            // 有缺失区间
            if (prev + 1 === num - 1) {
                result.push(`${prev + 1}`);
            } else {
                result.push(`${prev + 1}->${num - 1}`);
            }
        }
        prev = num;
    }

    return result;
}
