// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  const map = {};

  for (let i = 0; i < numbers.length; i += 1) {
    if (map[numbers[i]] === undefined) {
      map[target - numbers[i]] = i;
    } else {
      return [map[numbers[i]] + 1, i + 1];
    }
  }
};

const twoSumTwoPointers = function (numbers, target) {
  let left = 0; let
    right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum < target) {
      left += 1;
    } else if (sum > target) {
      right -= 1;
    } else {
      return [left + 1, right + 1];
    }
  }
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSumTwoPointers2 = function (numbers, target) {
  // set a left pointer to the first element of the array
  let left = 1;
  // set a right pointer to the last element of the array
  let right = numbers.length;

  // loop through the array; check if left and right add to target
  while (numbers[left - 1] + numbers[right - 1] !== target) {
    // sum is less than the target, increase left pointer
    if (numbers[left - 1] + numbers[right - 1] < target) {
      left += 1;
      // sum is greater than the target, decrease right pointer
    } else {
      right -= 1;
    }
  }
  // once their sum equals the target, return their indices
  return [left, right];
};

test('twoSum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 2]);
  expect(twoSum([2, 3, 4], 6)).toStrictEqual([1, 3]);
  expect(twoSum([-1, 0], -1)).toStrictEqual([1, 2]);
});
