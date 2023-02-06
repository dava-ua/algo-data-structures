// https://leetcode.com/problems/number-of-islands/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
  if (!grid.length) return 0;
  const res = [];
  let count = 0;

  const exploreIsland = (x, y) => {
    if (
      x < 0
      || y < 0
      || x >= grid.length
      || y >= grid[x].length
      || grid[x][y] === 0
    ) {
      return;
    }

    grid[x][y] = 0;
    count += 1;

    exploreIsland(x + 1, y);
    exploreIsland(x - 1, y);
    exploreIsland(x, y - 1);
    exploreIsland(x, y + 1);
  };

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === 1) {
        exploreIsland(i, j, 0);
        res.push(count);
        count = 0;
      }
    }
  }

  return !res.length ? 0 : Math.max(...res);
};

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
const grid1 = [[0, 0, 0, 0, 0, 0, 0, 0]];

test('maxAreaOfIsland', () => {
  expect(maxAreaOfIsland(grid)).toBe(6);
  expect(maxAreaOfIsland(grid1)).toBe(0);
});
