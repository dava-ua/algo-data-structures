// https://bigfrontend.dev/problem/search-first-index-with-Binary-Search-duplicate-array

/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function firstIndex(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = left + right >> 1;
    if (arr[mid] >= target) right = mid;
    else left = mid + 1;
  }
  return arr[left] === target ? left : -1;
}

test('firstIndex', () => {
  expect(firstIndex([1, 2, 3, 4, 4, 4, 4, 100, 1000, 10000], 4)).toBe(3);
});
