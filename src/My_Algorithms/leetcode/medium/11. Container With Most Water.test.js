// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  if (height.length === 2) return Math.min(...height);

  let max = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const res = Math.min(height[l], height[r]) * (r - l);
    if (res > max) { max = res; }
    if (height[l] <= height[r]) {
      l += 1;
    } else {
      r -= 1;
    }
  }

  return max;
};

test('maxArea', () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  expect(maxArea([1, 1])).toBe(1);
});
