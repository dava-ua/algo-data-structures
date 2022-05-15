// https://bigfrontend.dev/problem/find-the-single-integer

/**
 * @param {number[]} arr
 * @returns number
 */
function findSingle(arr) {
  return arr.reduce(
    (acc, curr) => acc ^ curr,
  );
}

test('findSingle', () => {
  expect(findSingle([10, 2, 2, 1, 0, 0, 10])).toBe(1);
});
