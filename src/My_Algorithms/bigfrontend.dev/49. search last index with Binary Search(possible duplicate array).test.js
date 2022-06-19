// https://bigfrontend.dev/problem/search-last-index-with-Binary-Search-possible-duplicate-array

/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function lastIndex(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = left + right >> 1;
    if (arr[mid] <= target) left = mid;
    else right = mid - 1;
  }
  return arr[left] === target ? left : -1;
}

test('lastIndex', () => {
  expect(lastIndex([1, 2, 3, 4, 4, 4, 4, 100, 1000, 10000], 4)).toBe(6);
});
