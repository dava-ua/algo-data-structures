// https://www.hackerrank.com/challenges/divisible-sum-pairs/

/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
  let res = 0;

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      if ((ar[i] < ar[j]) && (ar[i] + ar[j]) % k === 0) {
        res += 1;
      }
    }
  }
  return res;
}

test('divisibleSumPairs', () => {
  expect(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])).toBe(3);
  expect(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])).toBe(5);
});
