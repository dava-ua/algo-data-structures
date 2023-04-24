// https://leetcode.com/problems/combination-sum/
// https://www.youtube.com/watch?v=GBKI9VSKdGg
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  const res = [];

  const dfs = (i, current, total) => {
    if (total === target) {
      res.push([...current]);
      return;
    }
    if (i >= candidates.length || total > target) return;

    current.push(candidates[i]);
    dfs(i, current, total + candidates[i]);
    current.pop();
    dfs(i + 1, current, total);
  };

  dfs(0, [], 0);
  return res;
};

test('combinationSum', () => {
  expect(combinationSum([2, 3, 6, 7], 7)).toStrictEqual([[2, 2, 3], [7]]);
});

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSumLC = (candidates, target, start = 0, sum = 0, combination = [], res = []) => {
  if (sum > target) {
    return null;
  }

  if (sum === target) {
    res.push([...combination]);
  }

  for (let i = start; i < candidates.length; i++) {
    combination.push(candidates[i]);
    combinationSumLC(candidates, target, i, sum + candidates[i], combination, res);
    combination.pop(candidates[i]);
  }

  return res;
};
