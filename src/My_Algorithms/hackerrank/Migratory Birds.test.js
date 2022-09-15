// https://www.hackerrank.com/challenges/migratory-birds

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  const c = {};
  let max = 0;
  const res = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (!c[arr[i]]) {
      c[arr[i]] = 1;
    } else {
      c[arr[i]] += 1;
    }

    if (c[arr[i]] > max) { max = c[arr[i]]; }
  }

  for (const [key, value] of Object.entries(c)) {
    if (value === max) {
      res.push(parseInt(key, 10));
    }
  }

  return Math.min(...res);
}

test('migratoryBirds', () => {
  expect(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])).toBe(3);
  expect(migratoryBirds([1, 4, 4, 4, 5, 3])).toBe(4);
});
