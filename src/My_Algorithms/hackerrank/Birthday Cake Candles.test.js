// https://www.hackerrank.com/challenges/birthday-cake-candles

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  let max = Number.NEGATIVE_INFINITY;
  let count = 0;
  for (let i = 0; i < candles.length; i += 1) {
    if (candles[i] > max) {
      max = candles[i];
      count = 1;
    } else
    if (candles[i] === max) {
      count += 1;
    }
  }
  return count;
}

test('birthdayCakeCandles', () => {
  expect(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43])).toBe(5);
  expect(birthdayCakeCandles([4, 1, 3, 4])).toBe(2);
});
