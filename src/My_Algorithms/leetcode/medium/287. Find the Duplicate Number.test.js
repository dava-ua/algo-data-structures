// https://leetcode.com/problems/find-the-duplicate-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  // start hopping from Node_#0
  let [slow, fast] = [0, 0];

  // for locating start node of cycle
  let check = 0;

  // Step_#1
  // Cycle detection
  // Let slow jumper and fast jumper meet somewhere in the cycle

  while (true) {
    // slow jumpper hops 1 step, while fast jumpper hops two steps forward
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) {
      break;
    }
  }

  // Step_#2
  // Locate the start node of cycle (i.e., the duplicate number)
  while (true) {
    slow = nums[slow];
    check = nums[check];

    if (slow === check) {
      break;
    }
  }

  return check;
};

test('findDuplicate', () => {
  expect(findDuplicate([2, 5, 9, 6, 9, 3, 8, 9, 7, 1])).toBe(9);
  expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
  expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3);
});
