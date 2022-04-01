// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxK = function (nums) {
  const set = new Set(nums);
  const res = [];

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > 0 && set.has(-nums[i])) {
      res.push(nums[i]);
    }
  }

  return res.length ? Math.max(...res) : -1;
};

test('search', () => {
  expect(findMaxK([-1, 2, -3, 3])).toBe(3);
  expect(findMaxK([-1, 10, 6, 7, -7, 1])).toBe(7);
  expect(findMaxK([-10, 8, 6, 7, -2, -3])).toBe(-1);
});
