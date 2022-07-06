// https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  if (nums.length <= 2) return nums[0];

  const numbers = {};
  const max = { num: nums[0], times: 1 };

  for (let i = 0; i < nums.length; i += 1) {
    if (!numbers[nums[i]]) {
      numbers[nums[i]] = 1;
    } else {
      numbers[nums[i]] += 1;
      if (numbers[nums[i]] > max.times) {
        max.num = nums[i];
        max.times = numbers[nums[i]];
      }
    }
  }

  return max.num;
};

test('majorityElement', () => {
  expect(majorityElement([3, 2, 3])).toBe(3);
});
