// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const output = [];

  nums.reduceRight((prev, acc, i) => {
    output[i] = prev;
    return prev * acc;
  }, 1);

  nums.reduce((prev, acc, i) => {
    output[i] *= prev;
    return prev * acc;
  }, 1);

  return output;
};

const productExceptSelf_1 = function (nums) {
  const prefixProduct = new Array(nums.length);
  const suffixProduct = new Array(nums.length);

  prefixProduct[0] = 1;
  suffixProduct[nums.length - 1] = 1;

  let start = 1;
  let end = nums.length - 2;
  while (start < nums.length && end >= 0) {
    prefixProduct[start] = prefixProduct[start - 1] * nums[start - 1];
    suffixProduct[end] = suffixProduct[end + 1] * nums[end + 1];
    start += 1;
    end -= 1;
  }

  for (let i = 0; i < nums.length; i += 1) {
    nums[i] = prefixProduct[i] * suffixProduct[i];
  }

  return nums;
};
