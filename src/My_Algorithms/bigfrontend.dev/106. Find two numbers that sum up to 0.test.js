// https://bigfrontend.dev/problem/Find-two-numbers-that-sum-up-to-0

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function findTwo(arr) {
  const numbers = new Map();

  for (const i in arr) {
    numbers.set(arr[i], i);
  }

  for (const i in arr) {
    if (numbers.has(-arr[i])) return [+i, +numbers.get(-arr[i])];
  }

  return null;
}

test('findTwo', () => {
  expect(findTwo([1, 2, 3, -1])).toStrictEqual([0, 3]);
  expect(findTwo([1, 2, 3, -1, -2, 0])).toStrictEqual([0, 3]);
  expect(findTwo([1, 2, 3, 4])).toStrictEqual(null);
});
