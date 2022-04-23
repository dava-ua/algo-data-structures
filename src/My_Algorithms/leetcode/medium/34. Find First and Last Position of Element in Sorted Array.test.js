// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  if (!nums.length) return [-1, -1];

  let left = 0;
  let right = nums.length - 1;
  let mid = left + right >> 1;

  while (nums[mid] !== target && left <= right) {
    if (nums[mid] < target) {
      left = mid + 1;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    }
    mid = left + right >> 1;
  }

  if (nums[mid] !== target) return [-1, -1];

  let l = mid;
  let r = mid;
  while (nums[l - 1] === target || nums[r + 1] === target) {
    if (nums[l - 1] === target) {
      l -= 1;
    }
    if (nums[r + 1] === target) r += 1;
  }

  return [l, r];
};

test('searchRange', () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toStrictEqual([3, 4]);
  expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toStrictEqual([-1, -1]);
  expect(searchRange([], 0)).toStrictEqual([-1, -1]);
  expect(searchRange([1], 1)).toStrictEqual([0, 0]);
  expect(searchRange([2, 2], 2)).toStrictEqual([0, 1]);
  expect(searchRange([3, 3, 3], 3)).toStrictEqual([0, 2]);
});
