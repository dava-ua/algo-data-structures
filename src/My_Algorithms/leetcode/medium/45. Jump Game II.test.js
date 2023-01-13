// https://leetcode.com/problems/jump-game-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
//  maximim length of a forward jump from index i if wea re at num[i] ->  num[i+1]
// input: array
// expected-output : integer
// 2 3 1 1 4
// to reach 2 index  we need a 0 to 1
// 4th index  we need 3 steps
// to reach the last index len-1 iterate the loop
// [2,3,1,1,4]-> 2 steps
// 2 jumps -> 2 3 1
//  1 jump -> 1
// 1 jump -> 4

//

const jump = function (nums) {
  let min = 0;
  let max = 0;
  let jump = 0;
  const { length } = nums;
  for (let i = 0; i < length - 1; i++) {
    max = Math.max(max, i + nums[i]);
    if (i === min) {
      min = max;
      jump++;
    }
  }
  return jump;
};
