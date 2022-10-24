// https://leetcode.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  const buckets = [];
  let l = 0;
  let r = 0;
  while (height[l] >= height[f + 1]) {
    l += 1;
  }
  r = l + 1;

  let area =
  while (height[l] >=height[r] ){
  r+=1
  }
};

test('trap', () => {
  expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
});
