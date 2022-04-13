// https://www.hackerrank.com/challenges/mini-max-sum/problem

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  const sorted = arr.sort();
  const min = sorted.reduce((a, b) => a + b, 0) - sorted[arr.length - 1];
  const max = sorted.reduce((a, b) => a + b, 0) - sorted[0];
  return [min, max];
}

test('miniMaxSum', () => {
  expect(miniMaxSum([1, 3, 5, 7, 9])).toStrictEqual([16, 24]);
  expect(miniMaxSum([5, 9, 1, 7, 3])).toStrictEqual([16, 24]);
  expect(miniMaxSum([396285104, 573261094, 759641832, 819230764, 364801279])).toStrictEqual([2093989309, 2548418794]);
});
