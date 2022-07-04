// https://leetcode.com/problems/unique-paths/

/*Problem can be decomposed into the following sub-problems:

can I go right?
  can I go down?
  and the following base cases to get a response to those questions:

  have I gone outside bounds?

return 0. This is not a valid path.
  have I reached destination?

return 1. This is a valid path.
  Then I can add up the numbe of valid paths (see code below)

Here's my progression:

Brute force recursive
Optimize by memoizing
Turn around and make it dp bottom up tabular
Further optimize space
Brute force recursive*/

const uniquePaths = (m, n) => {
  return helper(m, n, 1, 1);
};

const helper = (m, n, row, col) => {
  if(row === m && col === n) return 1;
  if(row > m || col > n) return 0;

  const pathsRight = helper(m, n, row, col + 1);
  const pathsDown = helper(m, n, row + 1, col);

  return pathsRight + pathsDown;
};


// Memoized
const uniquePaths = (m, n) => {
  const memo = new Array(m + 1).fill(0);
  for(let i = 0; i < memo.length; i++) {
    memo[i] = new Array(n + 1).fill(-1);
  }
  return helper(m, n, 1, 1, memo);
};

const helper = (m, n, row, col, memo) => {
  if(row === m && col === n) return 1;
  if(row > m || col > n) return 0;

  if(memo[row][col] === -1) {

    const pathsRight = helper(m, n, row, col + 1, memo);
    const pathsDown = helper(m, n, row + 1, col, memo);

    memo[row][col] = pathsRight + pathsDown;
  }

  return memo[row][col];
};


// DP Bottom up tabular
const uniquePaths = (m, n) => {
  const dp = new Array(m + 1).fill(0);
  for(let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1).fill(1);
  }

  dp[m][n] = 1;
  for(let row = m - 1; row > 0; row--){
    for(let col = n - 1; col > 0; col--){
      dp[row][col] = dp[row + 1][col] + dp[row][col + 1];
    }
  }

  return dp[1][1];
};


//DP space optimized (there might be even further space optimization!!)
const uniquePaths = (m, n) => {
  const dp = new Array(n + 1).fill(1);

  for(let row = m - 1; row > 0; row--){
    for(let col = n - 1; col > 0; col--){
      dp[col] = dp[col] + dp[col + 1];
    }
  }
  return dp[1];
};

test('uniquePaths', () => {
  expect(uniquePaths(3,7)).toBe(28);
});
