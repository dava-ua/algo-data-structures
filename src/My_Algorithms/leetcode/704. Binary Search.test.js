// https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  if (!nums.length) return -1;

  let startIndex = 0;
  let endIndex = nums.length - 1;

  while (startIndex <= endIndex) {
    // const mid = left + ((right - left) >> 1);
    const middle = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (nums[middle] === target) {
      return middle;
    } if (nums[middle] > target) {
      endIndex = middle - 1;
    } else {
      startIndex = middle + 1;
    }
  }

  return -1;
};

test('search', () => {
  expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  expect(search([2, 5], 2)).toBe(0);
});
