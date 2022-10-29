// https://leetcode.com/problems/search-a-2d-matrix/

const binarySearch = function (nums, target) {
  if (!nums.length) return false;

  let startIndex = 0;
  let endIndex = nums.length - 1;

  while (startIndex <= endIndex) {
    // const mid = left + ((right - left) >> 1);
    const middle = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (nums[middle] === target) {
      return true;
    } if (nums[middle] > target) {
      endIndex = middle - 1;
    } else {
      startIndex = middle + 1;
    }
  }

  return false;
};
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix_my = function (matrix, target) {
  let firstRow = 0;
  let lastRow = matrix.length - 1;

  if (matrix.length === 1) return binarySearch(matrix[firstRow], target);

  while (firstRow < lastRow) {
    const midRow = firstRow + ((lastRow - firstRow) >> 1);
    if (matrix[midRow][0] === target) return true;
    if (matrix[midRow][0] > target) {
      lastRow = midRow - 1;
    } else if (matrix[midRow].at(-1) >= target) {
      return binarySearch(matrix[midRow], target);
    } else {
      firstRow = midRow + 1;
    }

    if (firstRow === lastRow) return binarySearch(matrix[firstRow], target);
  }

  return false;
};

const searchMatrix = function (matrix, target) {
  const arr = matrix.flat();

  return binarySearch(arr, target);
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix_leetcode1 = function (matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  let row = 0;
  let col = matrix[0].length - 1;

  while (col >= 0 && row <= matrix.length - 1) {
    if (matrix[row][col] === target) return true;
    if (matrix[row][col] > target) col -= 1;
    else if (matrix[row][col] < target) row += 1;
  }

  return false;
};

// ** Binary search complete matrix - O(log mn)**
const searchMatrix_leetcode2 = function (matrix, target) {
  let start = 0; let
    end = (matrix.length * matrix[0].length) - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midNum = matrix[Math.floor(mid / matrix[0].length)][mid % matrix[0].length];

    if (midNum === target) return true;
    if (midNum < target) start = mid + 1;
    else end = mid - 1;
  }
  return false;
};

test('searchMatrix', () => {
  expect(searchMatrix([[1]], 1)).toBeTruthy();
  expect(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 20)).toBeTruthy();
  expect(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 11)).toBeTruthy();
  expect(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)).toBeTruthy();
  expect(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)).toBeFalsy();
});
