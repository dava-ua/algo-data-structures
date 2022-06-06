// https://bigfrontend.dev/problem/fibonacci-number

/**
 * @param {number} n - non-negative integer
 * @return {number}
 */
function fib(n) {
  const res = [0, 1, 1];
  for (let i = 3; i <= n; i += 1) {
    res[i] = (res[i - 2] + res[i - 1]);
  }

  return res[n];
}

test('fib', () => {
  expect(fib(10)).toBe(55);
  expect(fib(25)).toBe(75025);
});
