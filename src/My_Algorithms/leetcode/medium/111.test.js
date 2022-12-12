// https://leetcode.com/problems/maximum-subarray/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let max = -Infinity;
  let prev = -Infinity;
  for (const num of nums) {
    prev = Math.max(prev + num, num);
    max = Math.max(prev, max);
  }
  return max;
};

test('maxSubArray', () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});
