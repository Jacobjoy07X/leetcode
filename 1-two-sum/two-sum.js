/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(num, target) {
 const a = new Map();

  for (let i = 0; i < num.length; i++) {
    const b = target - num[i];

    if (a.has(b)) {
      return [a.get(b), i];
    }

    a.set(num[i], i);
  }
};
