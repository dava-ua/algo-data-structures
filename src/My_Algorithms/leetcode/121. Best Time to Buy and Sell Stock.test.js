// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
// my initial solution
const maxProfit_my = function (prices) {
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

const maxProfitB = function (prices) {
  let left = 0; // Buy
  let right = 1; // sell
  let maxProfit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left]; // our current profit

      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right += 1;
  }
  return maxProfit;
};

test('maxProfit', () => {
  expect(maxProfitB([7, 1, 5, 3, 6, 4])).toBe(5);
  expect(maxProfitB([7, 6, 4, 3, 1])).toBe(0);
  expect(maxProfitB([3, 2, 6, 5, 0, 3])).toBe(4);
});
