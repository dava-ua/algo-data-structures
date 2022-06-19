// https://bigfrontend.dev/problem/search-element-right-before-target-with-Binary-Search-possible-duplicate-array

/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function elementBefore(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = left + right >> 1;
    if (arr[mid] >= target) right = mid;
    else left = mid + 1;
  }

  return arr[left] === target ? arr[left - 1] : undefined;
}

test('elementBefore', () => {
  expect(elementBefore([1, 2, 3, 4, 4, 4, 4, 100, 1000, 10000], 4)).toBe(3);
  expect(elementBefore([1, 1, 1], 1)).toBe(undefined);
});
