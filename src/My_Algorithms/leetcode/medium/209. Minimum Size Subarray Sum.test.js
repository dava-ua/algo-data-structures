/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (s, nums) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let result = 0;

  while (right < nums.length) {
    sum += nums[right];

    while (sum >= s) {
      const len = right - left + 1;
      if (result === 0 || len < result) {
        result = len;
      }
      sum -= nums[left];
      left += 1;
    }
    right += 1;
  }
  return result;
};

const minSubArrayLen_1 = function (s, nums) {
  let distance = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;
  // left pointer and right pointer defines the window.
  // the goal is to find the smallest window that has a sum of s or larger.
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= s) {
      distance = Math.min(distance, right - left + 1);
      sum -= nums[left];
      left += 1;
    }
  }

  return distance === Number.MAX_SAFE_INTEGER ? 0 : distance;
};

const minSubArrayLen_my_partial = function (target, nums) {
  nums = nums.sort();
  if (nums[0] > target) return 0;
  let res = 0;
  let left = 0;
  let right = 1;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === target) return 1;
    const sum = nums.slice(left, right + 1).reduce((a, b) => a + b, 0);
    if (sum < target) {
      right += 1;
    } else
    if (sum > target) {
      left += 1;
    } else {
      res = right - left;
      left += 1;
      right += 1;
    }
  }

  return res;
};

test('minSubArrayLen', () => {
  expect(minSubArrayLen(11, [1, 2, 3, 4, 5])).toBe(3);
  expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
  expect(minSubArrayLen(7, [1, 2, 2, 3, 3, 4])).toBe(2);
  expect(minSubArrayLen(4, [1, 4, 4])).toBe(1);
  expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0);
});
