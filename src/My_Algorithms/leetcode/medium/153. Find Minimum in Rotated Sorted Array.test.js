// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;
  let mid;

  // if the last element is greater than the first element then there is no
  // rotation.
  // e.g. 1 < 2 < 3 < 4 < 5 < 7. Already sorted array.
  // Hence the smallest element is first element. A[0]
  if (nums[right] > nums[0]) {
    return nums[0];
  }

  // Binary search way
  while (right >= left) {
    // Find the mid element
    mid = left + ((right - left) >> 1);

    // if the mid element is greater than its next element then mid+1 element is the
    // smallest
    // This point would be the point of change. From higher to lower value.
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }

    // if the mid element is lesser than its previous element then mid element is
    // the smallest
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }

    // if the mid elements value is greater than the 0th element this means
    // the least value is still somewhere to the right as we are still dealing with
    // elements
    // greater than nums[0]
    if (nums[mid] > nums[0]) {
      left = mid + 1;
    } else {
      // if nums[0] is greater than the mid value then this means the smallest value
      // is somewhere to
      // the left
      right = mid - 1;
    }
  }
  return nums[mid];
};

test('findMin', () => {
  expect(findMin([11, 13, 15, 17])).toBe(11);
  expect(findMin([2, 3, 4, 5, 1])).toBe(1);
  expect(findMin([5, 1, 2, 3, 4])).toBe(1);
  expect(findMin([1])).toBe(1);
  expect(findMin([2, 1])).toBe(1);
  expect(findMin([0, 1, 2, 4, 5, 6, 7])).toBe(0);
  expect(findMin([3, 4, 5, 1, 2])).toBe(1);
  expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
});
