/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let uniqe= new Set(nums)
    return uniqe.size!==nums.length
};