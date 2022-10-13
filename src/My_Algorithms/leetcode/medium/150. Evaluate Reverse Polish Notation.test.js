// https://leetcode.com/problems/evaluate-reverse-polish-notation/

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  const stack = [];
  const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)),
  };
  for (const t of tokens) {
    if (ops[t]) {
      const top = stack.pop();
      const second = stack.pop();
      stack.push(ops[t](second, top));
    } else {
      stack.push(Number(t));
    }
  }
  return stack.pop();
};

test('evalRPN', () => {
  expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(9);
  expect(evalRPN(['4', '13', '5', '/', '+'])).toBe(6);
  expect(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])).toBe(22);
});
