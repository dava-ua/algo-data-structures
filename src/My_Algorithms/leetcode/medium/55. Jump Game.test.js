// https://leetcode.com/problems/jump-game/description/
// https://dev.to/samuelhinchliffe/55-jump-game-1pfb

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  let goal = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    const distance = i + nums[i];
    if (distance >= goal) {
      goal = i;
    }
  }

  return !goal;
};

test('canJump', () => {
  expect(canJump([2, 3, 1, 1, 4])).toBeTruthy();
  expect(canJump([2, 3, 1, 1, 4])).toBeFalsy();
});
