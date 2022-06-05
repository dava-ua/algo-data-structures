// https://bigfrontend.dev/problem/Generate-Fibonacci-Number-with-recursion

// please modify code below to make it work for large number like `fib(1000)`
// recursion should still be used

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (fib[n]) return fib[n];
  const val = fib(n - 1) + fib(n - 2);
  return fib[n] = val;
}

test('fib', () => {
  expect(fib(10)).toBe(55);
  expect(fib(1000)).toBe(4.346655768693743e+208);
});
