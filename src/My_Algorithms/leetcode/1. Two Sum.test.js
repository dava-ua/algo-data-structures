// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// my initial solution
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    const secondIdx = nums.indexOf(target - nums[i]);
    if (secondIdx >= 0 && i !== secondIdx) {
      return [i, secondIdx];
    }
  }
  return [];
};

test('twoSum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
  expect(twoSum([3, 3], 6)).toStrictEqual([1, 0]);
});

/* most voted solution */
const twoSum1 = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
  return [];
};

const twoSum2 = function (nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i += 1) {
    const n = nums[i];
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return [];
};
