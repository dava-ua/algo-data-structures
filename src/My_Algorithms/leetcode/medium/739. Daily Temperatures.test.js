// https://leetcode.com/problems/daily-temperatures/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
  const res = new Array(temperatures.length).fill(0);
  let pointer = 0;

  for (let i = 0; i < temperatures.length; i += 1) {
    if (temperatures[i] < temperatures[i + 1]) {
      res[i] = 1;
    } else {
      pointer = i + 2;
      while (pointer < temperatures.length) {
        if (temperatures[pointer] > temperatures[i]) {
          res[i] = pointer - i;
          break;
        } else {
          pointer += 1;
        }
      }
    }
  }

  return res;
};

// leetcode faster: Traversing from the right
const dailyTemperatures_leetcode1 = function (T) {
  const stack = [];
  const result = new Array(T.length).fill(0);
  for (let i = T.length - 1; i >= 0; i -= 1) {
    while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length) {
      result[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }
  return result;
};

test('dailyTemperatures', () => {
  expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toStrictEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  expect(dailyTemperatures([30, 40, 50, 60])).toStrictEqual([1, 1, 1, 0]);
  expect(dailyTemperatures([30, 60, 90])).toStrictEqual([1, 1, 0]);
});
