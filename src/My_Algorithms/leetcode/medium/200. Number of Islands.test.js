// https://leetcode.com/problems/number-of-islands/description/

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  const clearIsland = (grid, x, y) => {
    if (
      x < 0
      || y < 0
      || x >= grid.length
      || y >= grid[x].length
      || grid[x][y] === '0'
    ) {
      return;
    }

    grid[x][y] = '0';

    clearIsland(grid, x + 1, y);
    clearIsland(grid, x - 1, y);
    clearIsland(grid, x, y - 1);
    clearIsland(grid, x, y + 1);
  };

  let count = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === '1') {
        count += 1;
        clearIsland(grid, i, j);
      }
    }
  }

  return count;
};

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
