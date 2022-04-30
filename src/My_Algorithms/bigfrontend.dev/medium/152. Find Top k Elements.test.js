// https://bigfrontend.dev/problem/top-k-elements

const bucketSort = (arr, size = 5) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const buckets = Array.from(
    { length: Math.floor((max - min) / size) + 1 },
    () => [],
  );
  arr.forEach((val) => {
    buckets[Math.floor((val - min) / size)].push(val);
  });
  return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
};

/*
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */
function topK_initial(arr, k) {
  return bucketSort(arr).slice(-k).reverse();
}

// ------------------- Other Users solutions -------------------------------
function topK(arr, k) {
  const buckets /* Array<Array<number>> */ = [];

  arr.forEach((int) => {
    if (buckets[int]) {
      buckets[int].push(int);
    } else {
      buckets[int] = [int];
    }
  });

  return buckets.flat().slice(-k).reverse();
}
// ------------------- Other Users solutions -------------------------------

test('uncompress_stack', () => {
  expect(topK_initial([1, 10, 8, 9, 10, 2, 3, 4, 8, 8, 6], 4)).toStrictEqual([10, 10, 9, 8]);
});
