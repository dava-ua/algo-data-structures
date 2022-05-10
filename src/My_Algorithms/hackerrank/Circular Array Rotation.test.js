// https://www.hackerrank.com/challenges/circular-array-rotation/problem

/*
 * Complete the 'circularArrayRotation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 *  3. INTEGER_ARRAY queries
 */

function circularArrayRotation_init(a, k, queries) {
  // reverse helper function
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  k %= a.length;

  reverse(a, 0, (a.length - 1));
  reverse(a, 0, (k - 1));
  reverse(a, k, (a.length - 1));

  return queries.map((i) => a[i]);
}

function circularArrayRotation(a, k, queries) {
  // Write your code here
  const arr = [];
  for (let i = 0; i < a.length; i += 1) {
    const m = (i + k) % a.length;
    arr[m] = a[i];
  }
  return queries.map((n) => arr[n]);
}

test('circularArrayRotation', () => {
  expect(circularArrayRotation([3, 4, 5], 2, [1, 2])).toStrictEqual([5, 3]);
});
