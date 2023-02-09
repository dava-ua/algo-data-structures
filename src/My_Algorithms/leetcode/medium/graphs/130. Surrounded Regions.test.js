// https://leetcode.com/problems/surrounded-regions/

/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function (board) {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (board[i][j] === 'O' && (i === 0 || j === 0 || i === board.length - 1 || j === board[0].length - 1)) dfs(i, j);
    }
  }

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (board[i][j] === 'Visited') {
        board[i][j] = 'O';
      } else {
        board[i][j] = 'X';
      }
    }
  }

  function dfs(i, j) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] === 'Visited' || board[i][j] === 'X') return;

    board[i][j] = 'Visited';
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }
};

const boardIn = [['O', 'O', 'O'], ['O', 'O', 'O'], ['O', 'O', 'O']];
const boardOut = [['O', 'O', 'O'], ['O', 'O', 'O'], ['O', 'O', 'O']];
const boardIn_1 = [['X', 'X', 'X', 'X'], ['X', 'O', 'O', 'X'], ['X', 'X', 'O', 'X'], ['X', 'O', 'X', 'X']];
const boardOut_1 = [['X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'O', 'X', 'X']];

test('solve', () => {
  solve(boardIn);
  expect(boardIn).toStrictEqual(boardOut);
  solve(boardIn_1);
  expect(boardIn_1).toStrictEqual(boardOut_1);
});
