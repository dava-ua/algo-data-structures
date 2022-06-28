// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let oneStepBefore = 2;
  let twoStepsBefore = 1;
  let allWays = 0;

  for (let i = 2; i < n; i += 1) {
    allWays = oneStepBefore + twoStepsBefore;
    twoStepsBefore = oneStepBefore;
    oneStepBefore = allWays;
  }
  return allWays;
};

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs_faster = function (n) {
  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i += 1) {
    const tmp = second;
    second = first + second;
    first = tmp;
  }

  return n > 1 ? second : first;
};
