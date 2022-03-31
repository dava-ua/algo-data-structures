// https://www.hackerrank.com/challenges/plus-minus/problem

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  const symbols = {
    positive: 0,
    negative: 0,
    zero: 0,
  };

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === 0) {
      symbols.zero += 1;
    }
    if (arr[i] > 0) {
      symbols.positive += 1;
    }
    if (arr[i] < 0) {
      symbols.negative += 1;
    }
  }

  return Object.values(symbols).forEach((value) => console.log((value / arr.length).toFixed(6)));
}

test('plusMinus', () => {
  const spy = jest.spyOn(console, 'log');

  plusMinus([-4, 3, -9, 0, 4, 1]);

  expect(spy).toHaveBeenCalledTimes(3);
  expect(spy).toHaveBeenCalledWith('0.500000');
  expect(spy).toHaveBeenCalledWith('0.333333');
  expect(spy).toHaveBeenCalledWith('0.166667');
});
