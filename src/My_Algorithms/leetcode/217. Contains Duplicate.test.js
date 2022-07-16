// https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i += 1) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }

  return false;
};

test('containsDuplicate', () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy();
  expect(containsDuplicate([1, 2, 3, 4])).toBeFalsy();
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy();
});
