// https://bigfrontend.dev/problem/merge-sorted-arrays

/**
 * @param {number[][]} arrList
 * non-descending integer array
 * @return {number[]}
 */
function merge(arrList) {
  const sorted = [];
  const { length } = arrList.flat();
  let position = 0;
  let min = Number.POSITIVE_INFINITY;
  while (sorted.length < length) {
    for (let i = 0; i < arrList.length; i += 1) {
      if (arrList[i][0] <= min) {
        min = arrList[i][0];
        position = i;
      }
    }
    sorted.push(min);
    min = Number.POSITIVE_INFINITY;
    arrList[position].shift();
  }

  return sorted;
}

test('merge', () => {
  expect(merge(
    [
      [1, 1, 1, 100, 1000, 10000],
      [1, 2, 2, 2, 200, 200, 1000],
      [1000000, 10000001],
      [2, 3, 3],
    ],
  )).toStrictEqual(
    [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 100, 200, 200, 1000, 1000, 10000, 1000000, 10000001],
  );
});
