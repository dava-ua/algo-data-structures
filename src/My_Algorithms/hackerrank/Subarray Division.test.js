// https://www.hackerrank.com/challenges/the-birthday-bar

/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s.slice(i, i + m).reduce((prev, cur) => prev + cur, 0) === d) {
      count += 1;
    }
  }

  return count;
}

test('birthday', () => {
  expect(birthday([2, 2, 1, 3, 2], 4, 2)).toBe(2);
  expect(birthday([1, 2, 1, 3, 2], 3, 2)).toBe(2);
  expect(birthday([1, 1, 1, 1, 1, 1], 3, 2)).toBe(0);
  expect(birthday([4], 4, 1)).toBe(1);
});
