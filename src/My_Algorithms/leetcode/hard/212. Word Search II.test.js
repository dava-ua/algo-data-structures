// https://leetcode.com/problems/word-search-ii/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (board, words) {
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  const res = [];

  const buildTrie = () => {
    const root = {};
    for (const w of words) {
      let node = root;
      for (const c of w) {
        if (node[c] == null) node[c] = {};
        node = node[c];
      }
      node.word = w;
    }
    return root;
  };

  const search = (node, x, y) => {
    if (node.word) {
      res.push(node.word);
      delete node.word; // make sure only print one time for each word
    }

    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return;
    if (!node[board[x][y]]) return;

    const c = board[x][y];
    board[x][y] = '#'; // Mark visited
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      search(node[c], i, j);
    }
    board[x][y] = c; // Reset
  };

  const root = buildTrie();
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      search(root, i, j);
    }
  }
  return res;
};

test('findWords', () => {
  expect(findWords(
    [
      ['o', 'a', 'a', 'n'], ['e', 't', 'a', 'e'], ['i', 'h', 'k', 'r'], ['i', 'f', 'l', 'v'],
    ],
    ['oath', 'pea', 'eat', 'rain'],
  )).toStrictEqual(['oath', 'eat']);
});
