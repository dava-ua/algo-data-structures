// https://leetcode.com/problems/permutations/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const res = [];

  const dfs = (path, used) => {
    if (path.length === nums.length) {
      // make a deep copy since otherwise we'd append the same list over and over
      res.push(Array.from(path));
      return;
    }

    for (let i = 0; i < nums.length; i += 1) {
      // skip used nums
      if (used[i]) continue;
      // add number to permutation, mark number as used
      path.push(nums[i]);
      used[i] = true;
      dfs(path, used);
      // backtrack: remove number from permutation, mark number as unused
      path.pop();
      used[i] = false;
    }
  };

  dfs([], Array(nums.length).fill(false));
  return res;
};

test('permute', () => {
  expect(permute([1, 2, 3])).toStrictEqual([[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]);
});
