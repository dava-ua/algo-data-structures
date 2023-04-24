// https://leetcode.com/problems/subsets/description/
// https://www.youtube.com/watch?v=REOH22Xwdkk

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const res = [[]];
  const subArr = [];

  const dfs = (i) => {
    if (i >= nums.length) return;

    subArr.push(nums[i]);
    res.push([...subArr]);
    dfs(i + 1);

    subArr.pop();
    dfs(i + 1);
  };

  dfs(0);
  return res;
};

const subsets_2 = function (nums) {
  const result = [[]];

  function backtrack(first, current) {
    // we iterate over the indexes i from 'first' to the length
    // of the entire sequence 'nums'
    for (let i = first; i < nums.length; i += 1) {
      current.push(nums[i]);

      // use distructure operator to clone 'current' value and save to 'result'
      result.push([...current]);

      // generate all other subsets for the current subset.
      // increasing the position by one to avoid duplicates in 'result'
      backtrack(i + 1, current);

      // BACKTRACK.
      current.pop();
    }
  }

  backtrack(0, []);
  return result;
};

test('subsets', () => {
  expect(subsets([1, 2, 3])).toStrictEqual([[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]);
});
