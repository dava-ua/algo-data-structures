/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */
function breakingRecords(scores) {
  const res = [-1, -1];
  let max = Number.NEGATIVE_INFINITY;
  let min = Number.POSITIVE_INFINITY;

  for (let i = 0; i < scores.length; i += 1) {
    if (scores[i] > max) {
      res[0] += 1;
      max = scores[i];
    }
    if (scores[i] < min) {
      res[1] += 1;
      min = scores[i];
    }
  }
  return res;
}

test('breakingRecords', () => {
  expect(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).toStrictEqual([2, 4]);
  expect(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])).toStrictEqual([4, 0]);
});
