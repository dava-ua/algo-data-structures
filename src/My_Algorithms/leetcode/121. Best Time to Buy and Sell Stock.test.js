// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
// my initial solution
const maxProfit = function (prices) {
  let profit = 0;
  let min = prices[0];
  let max = 0;

  for (let i = 0; i < prices.length; i += 1) {
    if (prices[i] < min) {
      min = prices[i];
      max = 0;
    }
    if (prices[i] > max) {
      max = prices[i];
    }

    if (max - min > profit) {
      profit = max - min;
    }
  }

  return profit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfitA = function (prices) {
  let small = Infinity;
  let maxP = 0;
  for (let i = 0; i < prices.length; i += 1) {
    small = Math.min(small, prices[i]);
    maxP = Math.max(maxP, prices[i] - small);
  }
  return maxP;
};

test('maxProfit', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  expect(maxProfit([3, 2, 6, 5, 0, 3])).toBe(4);
});
