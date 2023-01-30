// https://leetcode.com/problems/word-search/

/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  const ROW_NUM = board.length;
  const COL_NUM = board[0].length;

  function callDFS(r, c, idx) {
    if (word.length === idx) return true;
    if (r >= ROW_NUM || r < 0 || board[r][c] !== word[idx]) return false;

    board[r][c] = '#'; // mark as visited

    if (callDFS(r + 1, c, idx + 1)
      || callDFS(r - 1, c, idx + 1)
      || callDFS(r, c + 1, idx + 1)
      || callDFS(r, c - 1, idx + 1)) {
      return true;
    }

    board[r][c] = word[idx]; // reset the board
    return false;
  }

  for (let r = 0; r < ROW_NUM; r += 1) {
    for (let c = 0; c < COL_NUM; c += 1) {
      if (board[r][c] === word[0] && callDFS(r, c, 0)) return true;
    }
  }

  return false;
};

test('exist', () => {
  expect(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED')).toBeTruthy();
});
