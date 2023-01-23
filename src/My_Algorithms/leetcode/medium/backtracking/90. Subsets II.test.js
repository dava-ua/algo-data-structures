// https://leetcode.com/problems/subsets-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
  const result = [];
  nums.sort();

  const dfs = (arr, i) => {
    if (i === nums.length) {
      result.push(arr);
      return;
    }
    // take the current number
    dfs([...arr, nums[i]], i + 1);
    // while not at end of array and duplicate after current number
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }
    // leave the current number
    dfs([...arr], i + 1);
  };

  dfs([], 0);
  return result;
};

test('subsetsWithDup', () => {
  expect(subsetsWithDup([1, 2, 2])).toStrictEqual([[1, 2, 2], [1, 2], [1], [2, 2], [2], []]);
});
