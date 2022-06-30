// https://leetcode.com/problems/fibonacci-number/

/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 2) + fib(n - 1);
};

test('fib', () => {
  expect(fib(4)).toBe(3);
});
