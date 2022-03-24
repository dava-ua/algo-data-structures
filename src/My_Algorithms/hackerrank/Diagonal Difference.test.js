// https://www.hackerrank.com/challenges/diagonal-difference/problem

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

// initial solution
function diagonalDifference_initial(arr) {
  const diagonal1 = arr.map((row, idx) => row[idx]).reduce((a, b) => a + b, 0);
  const diagonal2 = arr.map((row, idx) => row[row.length - idx - 1]).reduce((a, b) => a + b, 0);
  return Math.abs(diagonal1 - diagonal2);
}

// enhanced solution
function diagonalDifference_second(arr) {
  return Math.abs(
    arr.map((row, idx) => row[idx] - row[row.length - idx - 1]).reduce((a, b) => a + b, 0),
  );
}

function diagonalDifference(arr) {
  return Math.abs(
    arr.reduce(
      (prev, currentRow, idx) => prev + currentRow[idx] - currentRow[currentRow.length - idx - 1],
      0,
    ),
  );
}

test('twoSum', () => {
  const map1 = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
  const map2 = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
  expect(diagonalDifference(map1)).toBe(2);
  expect(diagonalDifference(map2)).toBe(15);
});
